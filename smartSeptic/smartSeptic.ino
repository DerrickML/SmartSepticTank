#include <Ethernet.h>
#include <SoftwareSerial.h>

#define led 9
#define led1 7
#define echoPin 6
#define trigPin 8
#define ledPin 5

int ledState = LOW;

//Create software serial object to communicate with SIM800A
SoftwareSerial mySerial(3, 2); //SIM800L Tx & Rx is connected to Arduino #3 & #2

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED }; //Setting MAC Address for Ethernet Shield

char server[] = "10.34.0.133";
IPAddress ip(10, 34, 0, 14);
byte gateway[] = { 10, 34, 0, 1 };
byte subnet[] = { 255, 255, 255, 0 };
String readString;
EthernetClient client;

long startTime;
//long duration;
long previousMillis = 0; // will store last time GSM Function was Called
long distance;                              //Distance of the object from sensorlong echoTime Time taken for the echo
int echoTime;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);

  //Begin serial communication with Arduino and SIM800L
  mySerial.begin(9600);

  pinMode(led, OUTPUT);
  pinMode(led1, OUTPUT);

  if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    SMS();
    int c;
    for (c = 0; c < 10; c++) {
      digitalWrite(led, HIGH); // set pin high
      delay(500);
      digitalWrite(led, LOW);
      delay(500);
    }
    Ethernet.begin(mac, ip);
  }

}

void loop() {
  // put your main code here, to run repeatedly:
  Sensor();
  Serial.println(distance);

  Sending_To_phpmyadmindatabase();

  delay(1000);

}

//SENSOR FUNCTION FOR SETTING UP THE TRIGGER AND ECHO PINS
void Sensor()
{

  digitalWrite(trigPin, LOW);                   //Set the trigger pin of the SR04 sensor to low

  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);                //Set the trigger pin of the SR04 sensor to high which will which will send a pulse.

  delayMicroseconds(10);

  digitalWrite(trigPin, LOW);                 //Set the trigger pin of the SR04 sensor to low

  echoTime = pulseIn(echoPin, HIGH);        //Reads a pulse (either HIGH or LOW) on a pin. For example, if value is HIGH, pulseIn() waits for the pin to go HIGH, starts timing, then waits for the pin to go LOW and stops timing. Returns the length of the pulse in microseconds or 0 if no complete pulse was received within the timeout https://www.arduino.cc/en/Reference/PulseIn

  distance = echoTime * 0.0340 / 2;

  if (distance < 20) {
    digitalWrite(led1, HIGH);
    digitalWrite(led, LOW);
  }
  else {
    digitalWrite(led1, LOW);
    digitalWrite(led, HIGH);
  }

  Serial.print("Distance = ");
  Serial.println(distance);

}

//----------------------------------------------------------------------------------------------------------

void Sending_To_phpmyadmindatabase()   //CONNECTING WITH MYSQL
{
  if (client.connect(server, 80)) {
    Serial.println("Send_Data_connected");

    // Make a HTTP request
    client.print("GET /SmartSepticTank/data_input.php?");     //YOUR URL
    client.print("&Septic_Level=");
    client.print(distance);
    client.print(" ");      //SPACE BEFORE HTTP/1.1
    client.print("HTTP/1.1");
    client.println();
    client.println("Host: 10.34.0.36");
    client.println("Connection: close");
    client.println();
  }
  else {
    Serial.println("Send_Data_connection failed");
//    Serial.println(millis() / 1000);
//    myDelay(10000);

    // if you didn't get a connection to the server:
//    startTime = millis();
    
//    Serial.println("Send_Data_connection failed");//
//    digitalWrite(led1, HIGH);//
    //    long duration = millis()-startTime;
    //    Serial.println(duration);
  }
}

// duration is delay time in milliseconds
void myDelay(unsigned long duration)
{
  unsigned long start = millis();
  while (millis() - start <= duration)
  {
    blink(100); // blink the LED inside the while loop
//    Serial.println("Send_Data_connection failed");
  }
}
// interval is the time that the LED is on and off
void blink(long interval)
{
  if (millis() - previousMillis > interval)
  {
    // save the last time you blinked the LED
    previousMillis = millis();
    // if the LED is off turn it on and vice versa:
    if (ledState == LOW)
      ledState = HIGH;
    else
      ledState = LOW;
    digitalWrite(ledPin, ledState);
  }
}


//GSM MODULE FUNCTION TO SEND MESSAGE
void SMS() {
  //Begin serial communication with Arduino and SIM800L
  //  mySerial.begin(9600);

  Serial.println("GSM Initializing...");
  delay(1000);

  mySerial.println("AT"); //Once the handshake test is successful, it will back to OK
  updateSerial();

  mySerial.println("AT+CMGF=1"); // Configuring TEXT mode
  updateSerial();
  mySerial.println("AT+CMGS=\"+256774546556\"\r");//change ZZ with country code and xxxxxxxxxxx with phone number to sms
  updateSerial();
  //  mySerial.print("Last Minute Engineers | lastminuteengineers.com"); //text content
  mySerial.print("Hello!\n\nMessage: Failed to connect to the Network");
  updateSerial();
  mySerial.write(26);
  Serial.println("Message Sent");
}

//FUNCTION TO READ SERIAL DATA
void updateSerial()
{
  delay(500);
  while (Serial.available())
  {
    mySerial.write(Serial.read());//Forward what Serial received to Software Serial Port
  }
  while (mySerial.available())
  {
    Serial.write(mySerial.read());//Forward what Software Serial received to Serial Port
  }
}
