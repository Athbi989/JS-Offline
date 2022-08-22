/* 
     الدوال وربط الجافاسكربت بالموقع 

     Functions : -
     
     function أسم الدالة () {

     }

    - المعاملات تكتب بين الأقواس ()
    

     DOM (ربط HTML\JS): -
     اولا لابد تحديد (ID) 
     للوسم المطلوب ربطه بالجافاسكرتب

     let myTag = document.getElementById("أيدي الوسم")

    myTag.style --> تعديل ال css
    myTag.innerHTML --> تعديل الكتابة داخل الوسم
    myTag.display --> مسؤول عن ظهور\إختفاء الوسم
    myTag.value --> get the input value ( from input:text )
*/


/* مثال Task List */

function addTask () {
    let inputDiv = document.getElementById("taskInput") // ربط الوسم بالجافاسكربت
    let inputValue = inputDiv.value // خصائص ال DOM
    
    let taskList = document.getElementById("taskList") // ربط وسم القائمة الغير مرتبة
    
    
    // الأن يتم وضع القيمة المكتوبة داخل وسم القائمة
    taskList.innerHTML += `<li>${inputValue}</li>` 

}