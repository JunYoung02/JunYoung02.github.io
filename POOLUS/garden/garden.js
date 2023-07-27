fetch('Menu.json')
    .then(function(response){
    if(!response.ok){       // 응답이 성공적이지 않을 경우 에러
        throw new Error('에러에러에러');
    }
    return response.json(); // 응답을 잘 받았다면 응답 데이터 반환 후 다음 .then() 실행
    })
    .then(function(items){
        items.forEach(function(item){   // 받아온 응답 데이터로 반복문 실행
            const menusToShow = item.menus.slice(0,2);  // 메뉴를 2개씩만 표시되도록 설정
        
            const template =`
            <button>
            <div class="booth-box d-flex">
                <div><img src="./gardenImg/booth.png" alt="부스 이미지"></img></div>
                <div class="booth-info d-flex flex-column justify-content-center text-start">
                    <p class="boothtile mb-1">${item.department}</p>
                    <p class="boothsub mb-0">${menusToShow.map(menu=> `<span>${menu.name}</span><br/>`).join('')}</p>   <!--메뉴를 2개씩 표시되도록 설정-->
                </div>
            </div>
            </button>
            `;
            $(".boothSection").append(template);  
        })
    })
    .catch(function(error){
        console.log(error);
    });