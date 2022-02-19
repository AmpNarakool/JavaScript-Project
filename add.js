function calTax(){

    var income = parseInt(document.getElementById("inputIncome").value);
    var cost = parseInt(document.getElementById("inputCost").value);
    var discount = parseInt(document.getElementById("inputDisc").value);

    var totalCost = cost + discount + 60000;
    var totalIncome = income - totalCost


    document.getElementById("allDiscount").innerHTML = "ค่าลดหย่อนภาษีทั้งหมด คือ " + totalCost + " บาท" +"<br>"
    document.getElementById("result").innerHTML = "ยอดเงินได้สุทธิ คือ " + totalIncome + " บาท" +"<br>"
    
    if(totalIncome <= 150000){
        document.getElementById("report").innerHTML = "ไม่ต้องเสียภาษี"
    
    }else if(totalIncome >= 150001 && totalIncome <= 300000 ){
        
        var tax = totalIncome * 0.05 
        document.getElementById("report").innerHTML = "ต้องเสียภาษี5% จำนวน " + tax + " บาท"
    
    }else if(totalIncome >= 300001 && totalIncome <= 500000 ){
        var tax = totalIncome * 0.10
        document.getElementById("report").innerHTML = "ต้องเสียภาษี10% จำนวน " + tax + " บาท"
    
    }else if(totalIncome >= 500001 && totalIncome <= 750000 ){
        var tax = totalIncome * 0.15
        document.getElementById("report").innerHTML = "ต้องเสียภาษี15% จำนวน " + tax + " บาท"
    
    }else if(totalIncome >= 750001 && totalIncome <= 1000000 ){
        var tax = totalIncome * 0.20
        document.getElementById("report").innerHTML = "ต้องเสียภาษี20% จำนวน " + tax + " บาท"
    
    }else if(totalIncome >= 1000001 && totalIncome <= 2000000 ){
        var tax = totalIncome * 0.25
        document.getElementById("report").innerHTML = "ต้องเสียภาษี25% จำนวน " + tax + " บาท"
    
    }else if(totalIncome >= 2000001 && totalIncome <= 5000000 ){
        var tax = totalIncome * 0.30
        document.getElementById("report").innerHTML = "ต้องเสียภาษี30% จำนวน " + tax + " บาท"
    
    }else{
        var tax = totalIncome * 0.35
        document.getElementById("report").innerHTML = "ต้องเสียภาษี35% จำนวน " + tax + " บาท"
    }
}

function btnReset() {
    document.getElementById("myForm").reset();
  }