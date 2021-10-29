    function handleClick() {
        let select = document.querySelectorAll('.button');
        for (let i=0; i < select.length; i++){
            select[i].addEventListener('click', function(){
                console.log(select[i].textContent);
            })
        }
    }