# TTA

Разработайте программу, имитирующую работу трансагентства. Трансагентство имеет сеть филиалов в нескольких городах. Транспортировка грузов осуществляется между этими городами тремя видами транспорта: автомобильным, железнодорожным и воздушным. Любой вид транспортировки имеет стоимость единицы веса на единицу пути и скорость доставки. Воздушный транспорт можно использовать только между крупными городами, этот вид самый скоростной и самый дорогой. Кроме того, воздушный транспорт зависит от погоды. Доставить груз воздушным путем можно только при условии хорошей погоды одновременно в городах отправки и назначения. Хорошая или плохая погода задается случайным образом. Железнодорожный транспорт можно использовать между крупными и средними городами, этот вид самый дешевый. Автомобильный транспорт можно использовать между любыми городами. Заказчики через случайные промежутки времени обращаются в один из филиалов трансагентства с заказом на перевозку определенной массы груза и возможным пожеланием о скорости/цене доставки. Трансагентство организует отправку грузов одним из видов транспорта с учетом пожеланий клиента. Оплату трансагенство получает только после успешной доставки груза. Между некоторыми городами для железнодорожного и/или автомобильного транспорта имеются скоростные магистрали, на которых скорость соответствующего вида транспорта увеличивается с заданным коэффициентом. При перевозке грузов могут происходить аварии, при этом вероятность аварии на автотранспорте больше, чем на железнодорожном транспорте, а авиатранспорт имеет аварийность очень низкую. На скоростных магистралях вероятность аварии меньше, чем на обычных дорогах. При аварии трансагентство возвращает заказчику двойную стоимость перевозки.
Процесс имитации может быть остановлен пользователем программы для просмотра параметров объектов:
 Доход трансагенства, в том числе с разбивкой по видам транспорта и городам.
 Среднее время доставки груза, в том числе с разбивкой по видам транспорта и городам.
 Потери, связанные с плохой погодой.
 Потери, связанные с аварийностью, в том числе с разбивкой по видам транспорта и по видам дорог.
 Доход на тонно-километр скоростных магистралей в сравнении с таким же доход на обычных дорогах.
 Список исполняемых заказов с возможность сортировки по городам, видам транспорта, стоимости перевозки.
 Список задерживаемых заказов в связи с плохой погодой.