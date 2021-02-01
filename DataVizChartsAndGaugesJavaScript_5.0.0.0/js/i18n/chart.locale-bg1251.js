(function (DateFormatter) {
    /**
      * DataViz Charts Bulgarian Translation
      * http://www.jqchart.com/
      * 
      * In order to use a particular language pack, you need to include the JavaScript language
      * pack to the head of your page, after referencing the dataviz.chart JavaScript file.
      * 
      * <script src="../js/dataviz.chart.min.js" type="text/javascript"></script>
      * <script src="../js/i18n/chart.locale-xx.js" type="text/javascript"></script>
      **/
    DateFormatter.DateFormat = {
        dayNames: [
            "Нед", "Пон", "Вт", "Ср", "Чет", "Пет", "Съб",
            "Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"
        ],
        monthNames: [
            "Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек",
            "Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
        ],
        amPm: ["", "", "", ""],
        s: function (j) {
            if (j == 7 || j == 8 || j == 27 || j == 28) {
                return 'ми';
            }
            return ['ви', 'ри', 'ти'][Math.min((j - 1) % 10, 2)];
        },
        masks: {
            shortDate: "d/m/yyyy",
            shortTime: "H:MM",
            longTime: "H:MM:ss"
        }
    };
})(DataViz.DateFormatter);
