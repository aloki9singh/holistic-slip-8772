var product_data = [
    {
      image_url: "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU"     ,
      best:"Best Seller"   ,
      name: "REDEFINE Regimen ",
      line:"Visibly lifts, sculpts + firms while minimizing the appearance of lines + deep wrinkles.  ",
      price: "220",
      stars: "**** 4.7 (7340)",
    },
    {
        image_url:"https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY"      ,
        best:"Best Seller"   ,
        name: "REVERSE Regimen ",
        line:" Brightens + refines skin’s surface while tackling the look of fine lines + dark spots. ",
        price: "195",
        stars: "***** 4 (1792)",
      },
      {
        image_url:  "https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU"    ,
        best:"Best Seller"   ,
        name: "UNBLEMISH Regimen ",
        line:" Helps clear and prevent adult acne while visibly minimizing pores + fine lines.",
        price: "190 ",
        stars: "***** 4.4 (463)",
      },
      {
        image_url:"https://www.rodanandfields.com/en-us/medias/SOWA125-SOTT050-SOMO050-SOSS050-SOOTHE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MDc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Zi9oYWMvMTM3NTgzODUxMjc0NTQucG5nfGFmOTE5ZGY1MjdhZmFkNDhhNzNiOTkyYTYzODAxNzI4OTE3ZGQ5Zjk3YzRlOGRlNTIzYzU3MzZlMTQzNGEzNTI"      ,
        best:"Best Seller"   ,
        name: "SOOTHE Regimen ",
        line:" Protects sensitive skin, reduces visible redness + fortifies skin’s moisture barrier. ",
        price: "185 ",
        stars: "***** 4.3 (672)",
      },
      {
        image_url: "https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3"     ,
        best:""   ,
        name: "SPOTLESS Regimen ",
        line:"For teens + young adults: Clears existing blemishes + prevents new ones from forming. ",
        price: "89",
        stars: " *****4.7 (7340)",
      },
      {
        image_url: "https://www.rodanandfields.com/en-us/medias/RCWA125-RCTTO50-RCSP040-REGHARGE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDMvMTM3NTgzODQ2MDMxNjYucG5nfGQ4MzYxODU0ZDcxOTZiOTdlODg3NmZmZTAzZGQ1MGQ5Yjg0YzBhODk3NzJhYzM5NzZlNjQ1NjQzNGQ3NTY0ZmE"     ,
        best:""   ,
        name: " RECHARGE Regimen",
        line:"Defends against lifestyle stressors that leave skin looking dull, blotchy + dehydrated.  ",
        price: "134 ",
        stars: "***** 4.6(723)",
      },
     
      {
        image_url:  "https://www.rodanandfields.com/en-us/medias/HAAGRTRF-AAWA125-AATN125-AATL030-AAPL030-ENFM030-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w4NDEwM3xpbWFnZS9qcGVnfGltYWdlcy9oZGMvaGRkLzEzOTc3NjUzNTQyOTQyLmpwZ3xhN2M4ZTcyYjQxNzhjMjcyNDZiNzk5OTEzOWZhZDA2NzIyNzkyODhiYzY0NjY2ZTk1ZGY4OWQ0NTJjNjc3Njk0"    ,
        best:""   ,
        name: "REDEFINE + Total RF Serum Special ",
        line:"Save on our best selling Regimen + most comprehensive anti-aging serum. ",
        price: "358 ",
        stars: "***** 4.6(723)",
      },
      {
        image_url: "https://www.rodanandfields.com/en-us/medias/HRVRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NDMwOHxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaGMzLzEzOTc3NjU2NTI0ODMwLmpwZ3wzZDI3Mzk1ZTZhMjVjMTMwMWZhMTYzNTNmZjVlYTAxM2YwMzYwYTg5OWU1NTNlYjY3MTYwNDQzNGY3ZTA4ZGY3"     ,
        best:""   ,
        name: "REVERSE + Total RF Serum Special ",
        line:" Save on our best selling Regimen + most comprehensive anti-aging serum.",
        price: "334 ",
        stars: "***** 4.6(723)",
      },
      {
        image_url: "https://www.rodanandfields.com/en-us/medias/HUNRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w5NTM5MnxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDhjLzEzOTc3NjU3OTY2NjIyLmpwZ3xkYzVkYmZhM2IyYmU1ZmFiZWI5NTMxYjQxYzhkZDNlNDMxMDYzNmFiZDg5NzUzNTc5NDI4NDllYWY0YzEzNmIz"     ,
        best:""   ,
        name: " UNBLEMISH + Total RF Serum Special",
        line:" Save on our best selling Regimen + most comprehensive anti-aging serum.",
        price: "328",
        stars: "",
      },
      {
        image_url:    "https://www.rodanandfields.com/en-us/medias/HSORGTRF-SOWA125-SOTT050-SOMO050-SOSS050-ENFM030-900x900-tablet-1.jpg?context=bWFzdGVyfGltYWdlc3wxMTAzNjF8aW1hZ2UvanBlZ3xpbWFnZXMvaGY3L2g5MS8xMzk3NzY1Nzc3MDAxNC5qcGd8ZDhkOGZhNDhhNjAwMTdjN2YxNmRhMjlkYjkzZmVjYzgyMTcwY2VhMmNlMjhlZDQ5NGJhMzExNWQxNjljYjM0Mg"  ,
        best:""   ,
        name: " SOOTHE + Total RF Serum Special",
        line:" Save on our sensitive skin Regimen + our most comprehensive anti-aging serum. ",
        price: "323",
        stars: "",
      },
      {
        image_url:"https://www.rodanandfields.com/en-us/medias/HRCRGTRF-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w3ODAwMXxpbWFnZS9qcGVnfGltYWdlcy9oNmYvaGE3LzEzOTc3NjU1NTc0NTU4LmpwZ3w3MjA1Y2RhNjE1N2VhNWFkN2U3ZDUyNmVkY2NkZWI5MWNhNzQ0N2QxN2U4ZjE1ODYxZDIxMmI1MzA1Y2UyZmEy"      ,
        best:""   ,
        name: "RECHARGE + Total RF Serum Special ",
        line:"Boost + lift, balance + tighten, defend + brighten! Recharge your complexion every day. ",
        price: "272 ",
        stars: "",
      },
      {
        image_url:   "https://www.rodanandfields.com/en-us/medias/HAAGRLP1-AAWA125-AATN125-AATT030-AAPM030-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0OTY1NnxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaDg4LzEyNzgwOTE0NTA3ODA2LmpwZ3xlOGNmOTZiYjIyZGIxOTk4NGFhMDJiNDY1YzM0NzNjZjg2NDZiZTBkZTkwN2ZiOGIxZTBhNDQ0OWI5NzQ2ODMw"   ,
        best:""   ,
        name: "REDEFINE + Lash Boost Special ",
        line:"Ditch wrinkles + mascara. Visibly lifts, sculpts + firms skin, plus conditions lashes. ",
        price: "343 ",
        stars: "",
      },
      {
        image_url: "https://www.rodanandfields.com/en-us/medias/HRVRBLP1-RVWA125-RVTG125-RVTTG50-RVSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaDYzLzEyNzcxNTgxNzIyNjU0LmpwZ3wzZGRiMDk0ZDAzZjgzOTk1MThkZWEzNGRkOTVjNTk2NTc2MTJiYWY1ODk0Y2YwMmI2NTU2YzVkODgzYTA0YTFk"     ,
        best:""   ,
        name: " REVERSE + Lash Boost Special",
        line:"Visibly revitalize skin + condition lashes for a younger-looking appearance. ",
        price: "432",
        stars: "",
      },
      {
        image_url: "https://www.rodanandfields.com/en-us/medias/HUNRJLP1-UNWA125-UNTJ125-UNTT030-UNSS030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0ODE5MHxpbWFnZS9qcGVnfGltYWdlcy9oZTQvaDk1LzEyNzcxNTkwODk3Njk0LmpwZ3w3ZDQ4ZDYzNjI0ZjI3YmU1MjhmOTI0N2QyYzYwNmVkZjY3YTc5MzdlNDBhMGJhN2I5NTRmNDZhYWE2M2NmNDY0"     ,
        best:""   ,
        name: " UNBLEMISH + Lash Boost Special",
        line:" Get fewer pimples + the appearance of longer lashes.",
        price: "312 ",
        stars: "",
      },
      {
        image_url:   "https://www.rodanandfields.com/en-us/medias/HSORGLP1-SOWA125-SOTT050-SOMO050-SOSS050-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0MTg3OHxpbWFnZS9qcGVnfGltYWdlcy9oOTUvaGQ1LzEyNzcxNTg3MTk0OTEwLmpwZ3w2Y2Q0ZmI5MDMwYzdmYTEwMGUzYzU4M2NiZGRkMWYxOTQ2MWIwMDAwMDIyYTEzYzI4YzUzNTZmMjZhZjNkMTRi"   ,
        best:""   ,
        name: "SOOTHE + Lash Boost Special ",
        line:"Visibly reduce redness + condition lashes for a younger-looking appearance. ",
        price: "307",
        stars: "",
      },
      {
        image_url:   "https://www.rodanandfields.com/en-us/medias/RCLBES1-720x600-desktop.jpg?context=bWFzdGVyfGltYWdlc3wxOTIwM3xpbWFnZS9qcGVnfGltYWdlcy9oYWYvaDY2LzkxNzEyMzg3NDgxOTAuanBnfDIzM2NlODM0ODNjNTgxYThiMDAyMGJlYWEwMzRiZmU4ZDJiNThkODM3OTFmMmJhZjNmMzFmNDE3ODk5OWVhMzg"   ,
        best:""   ,
        name: "RECHARGE + Lash Boost Special ",
        line:" Get a glowing, luminous look + the appearance of lush, fuller-looking lashes.",
        price: "256",
        stars: "",
      },
      {
        image_url:  "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-AAAPS01-1168x1168-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDg1Nzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDMyL2g0OC8xMjM5NjczMTQzMjk5MC5qcGd8YjM5NjlhNjM0MjM3ZDA0M2UwMGVmOTk5YmI0OWFhMjIyODlhN2YxOTFiYjAxYWFlOGQ5NjYyN2NkYjllYTQ3Mg"    ,
        best:""   ,
        name: " REDEFINE AMP It Up Special",
        line:"Fight wrinkles with micro-exfoliation technology + skin-fortifying serum. ",
        price: "400",
        stars: "",
      },
      {
        image_url:  "https://www.rodanandfields.com/en-us/medias/HRVAPS01-RVWA125-RVSS050-RVTTG50-AAAPS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w1NzcwMXxpbWFnZS9qcGVnfGltYWdlcy9oMDgvaDhhLzEyNzcxNTc5ODg3NjQ2LmpwZ3wzOWNmZWJjNjlhMzY1NjkxM2JiOThlMGUwNzJhYjk1NDQzY2E5NGQwNmNhMzIxZThkOTlhODI1YmZhNmUzYWIz"    ,
        best:""   ,
        name: " REVERSE AMP It Up Special",
        line:" Fight age spots with micro-exfoliation technology + skin-fortifying serum.",
        price: "376 ",
        stars: "",
      },
      {
        image_url:  "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wzOTY1NHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDlmLzExODU0MDU2MzkwNjg2LmpwZ3xhOGI1MDZkNjc5NzQ0NDg4Y2NmZDRkZjBkYWZmYzg5MGQ5MzM4NjdkYzAyZGVmODU5NDNkMTJhMmZjMGZiODE3"  ,
        best:""   ,
        name: "REDEFINE Power Up Special ",
        line:"Fight wrinkles + clogged pores with a special that visibly lifts, firms + deep cleans. ",
        price: "428 ",
        stars: "",
      },
      {
        image_url:   "https://www.rodanandfields.com/en-us/medias/HRBXPSEG-RVWA125-RVTG125-RVTTG50-RVSS050-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0NDA3OHxpbWFnZS9qcGVnfGltYWdlcy9oMDMvaGJkLzEyNzcxNTc4MjQ5MjQ2LmpwZ3w0YjY5Yjg0YWI3ODFjNGZiZDgyYTA2M2YzYTFiYmNjNzcwNjU3NWQwOGQyOGY0MDhjZTgwM2RjMWZlMjUzMjU0"   ,
        best:""   ,
        name: "REVERSE Power Up Special ",
        line:"Reveal your brightest complexion with a deep pore clean for more luminous skin. ",
        price: "403",
        stars: "",
      },
      {
        image_url:   "https://www.rodanandfields.com/en-us/medias/HUNXPSEG-UNWA125-UNTJ125-UNTT030-UNSS030-XTPCS01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0MjkxNHxpbWFnZS9qcGVnfGltYWdlcy9oYjgvaGYyLzEyNzcxNTkzMTI1OTE4LmpwZ3wxNzY4MjI4ZjYwNWJjNWE1ZTc4MjIyNzRkNTJjYjM0NGUxNTNmNDg3YWY2NzU3YTU1MDg4ODE2ODQ5NjU4MTRm"   ,
        best:""   ,
        name: " UNBLEMISH Power Up Special",
        line:" This power pair fights pimples + clogged pores for a more youthful-looking complexion.",
        price: "398 ",
        stars: "",
      },
      {
        image_url:  "https://www.rodanandfields.com/en-us/medias/TAXPSEG-720x600-desktop.jpg?context=bWFzdGVyfGltYWdlc3wyMDEyOHxpbWFnZS9qcGVnfGltYWdlcy9oNDYvaDkwLzkxNzEyNDU5ODk5MTguanBnfGQ0N2UwNGZhOGUzNjAyYzM1Y2I2NjI4ZGY2NjczYzZkYWQ2OTVhY2Q3YmIwMWI1NjFkNjQ3ZmJmZWJkMWY0MmY"    ,
        best:""   ,
        name: " SPOTLESS Power Up Special",
        line:"This special clears existing acne + deep cleans to prevent future breakouts. ",
        price: "297",
        stars: "",
      },
      {
        image_url:  "https://www.rodanandfields.com/en-us/medias/RCXPSEG-720x600-desktop.jpg?context=bWFzdGVyfGltYWdlc3wxNzc1M3xpbWFnZS9qcGVnfGltYWdlcy9oMDUvaGIyLzkxNzEyNDQwODkzNzQuanBnfGU4YTdjMzZjMWY0MGE5MGJlODI5YTI5ZmM1YmI2MDE0MGU1YjI5YjIzZDE3Zjg4MTMzM2VmZGMyOTI3ZTJmNTQ"    ,
        best:""   ,
        name: "RECHARGE Power Up Special ",
        line:" This power pair visibly improves stressed skin while cleaning deep into pores.",
        price: "342",
        stars: "",
      },
      {
        image_url:    "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-AAEY015-AASRI60-AALS060-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wzNjMxOXxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaGQ2LzExODU2MTM2NTM2MDk0LmpwZ3xiNjcxNDJiMmNkNTAyNTE0OWU2NGE3MzA1MWEzZmViMDk3MjA4YTQ5YjZlMzY4N2Q0NDRjNTEwZTU1ODExMGMw"  ,
        best:""   ,
        name: "REDEFINE Age Assault Special ",
        line:"This comprehensive anti-aging set visibly firms skin + eye contours and plumps lips. ",
        price: "400 ",
        stars: "",
      },
]

let container=document.getElementById("container");
let cartLS =JSON.parse(localStorage.getItem("cartpage"))||[]
 
    function display(data){

      //step to empty container
      container.innerHTML=null;

        data.forEach(function(ele) {
        let product=document.createElement("div");
        product.setAttribute("class","product")

        let  img=document.createElement("img")
          img.setAttribute("src",ele.image_url)
        let  best=document.createElement("p")
          best.innerText=ele.best
          best.setAttribute("class","best")

       let   namer=document.createElement("p")
          namer.innerText=ele.name
        let  liner=document.createElement("p")
          liner.innerText=ele.line
          liner.setAttribute("class","line")
            
        let  price=document.createElement("p");
          price.innerText="$ "+ele.price
          price.setAttribute("class","price")

         let stars=document.createElement("p");
          stars.innerText=ele.stars
          stars.setAttribute("class","stars")
          


          let cart= document.createElement("button");
          cart.setAttribute("class","btn")
          cart.innerText="ADD TO BAG"
          cart.addEventListener("click",function(){
                addtocart(ele)
          })


          product.append(img,best,namer,liner,price,stars,cart)
          container.append(product)
      });
                
            
    }
    display(product_data)

function addtocart(product){
cartLS.push(product);
alert("Product added succesfully");
localStorage.setItem("cartpage",JSON.stringify(cartLS))
}





let username =JSON.parse(localStorage.getItem("Signin"))
document.getElementById("signin").innerText=username["name"]
