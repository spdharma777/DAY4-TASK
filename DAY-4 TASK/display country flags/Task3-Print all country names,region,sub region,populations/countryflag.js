fetch("https://restcountries.com/v2/all").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
                if(data.length>0){
                    var temp="";
                    data.forEach((u)=>{
                        temp+="<tr>";
                        temp+="<td>"+u.name+"</td>";
                        temp+="<td>"+u.region+"</td>";
                        temp+="<td>"+u.subregion+"</td>";
                        temp+="<td>"+u.population+"</td></tr>";
                    })
                    document.getElementById("data").innerHTML = temp;
                }
            }
        )
    }
);