# SmartSepticTank
It's an IoT based system that's developed using the Arduino board, GSM Module, Ethernet shield, and an Ultrasonic sensor. It's comprised of a MySQL database and a web dashboard.
The septic tank can be remotely monitored by the user, and also capable of receiving SMS notifications in case of a problem (e.g in case of a network failure.).
The web dashboard provides a nice UI for the user where by he/she can view changes in the septic-tank at near real-time. DataVizChartsAndGauges Js lib was used to create an animated horizontal gauge and Fusion scharts lib was used to create the Cyliderical chart.
The MySQL database is created to act as a storage repository for the sensor readings & data. For my case, I used localhost(Xampp) as my server.
