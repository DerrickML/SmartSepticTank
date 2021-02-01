<footer class="footer">
    <div class="footer__copyright">&copy; 
        <?php
            $startYear = 2020;
            $thisYear = date('Y');
            if ($startYear == $thisYear) {
            echo $startYear;
            } else {
            echo "{$startYear}&ndash;{$thisYear}";
            }
        ?>
        Final Year Project IoT Based Smart-Septic Tank Monitoring System
    </div>
    <div class="footer__signature">Made with love</div>
</footer>