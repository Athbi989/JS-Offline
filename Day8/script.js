/*
        Array (المصفوفات) 

let array_name = [`value1`,`value2`]

        خصائص المصفوفات

1- array.push('القيمة') --> إضافة عنصر للمصفوفة
2- array.pop() --> حذف اخر عنصر من المصفوفة
3- array.length --> حجم المصفوفة (عدد القيم الي داخلها)

      خصائص متقدمة للمصفوفات 
*/

/*
                    Filter
 يقوم بالتأكد من شرط ما على جميع قيم المصفوفة
 
let filterdArray = المصفوفة.filter(الشرط <= تعريف متغير)

Example 2 : 

let numbers = [6,4,0.2,1]
let flt = numbers.filter(x => x < 1 ) // [0.2]

*/

/*
                    forEach
 يقوم بتطبيق اكواد برمجية على جميع قيم المصفوفة
 
    المصفوفة.forEach(element => {
        هنا الأكواد البرمجية
    });
*/




// مثال موقع بيع السيارات

let cars = ["سلفرادو","لكزس","كورولا","كامري"] // مصفوفة السيارات

let carsDiv = document.getElementById("cars_list") // ربط الوسم الحاوي للكروت الخاصة بالسيارات


// مرور على جميع قيم المصفوفة وطباعتها على الموقع
cars.forEach(element => {
    
    carsDiv.innerHTML += `
    <div>
        <img src="./images.png">
        <span>${element}</span>
    </div>`
});
