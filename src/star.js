const Star = (props) => {
    let num = parseInt(props.star);
    const star = <i className='fas fa-star'></i>

    switch (num) {
        case 1:
            return(
                <li>
                    {star}
                </li>
            );

        case 2:
            return(
                <li>
                    {star}
                    {star}
                </li>
            );

        case 3:
            return(
                <li>
                    {star}
                    {star}
                    {star}
                </li>
            );

        case 4:
            return(
                <li>
                    {star}
                    {star}
                    {star}
                    {star}
                </li>
            );
        case 5:
            return(
                <li>
                    {star}
                    {star}
                    {star}
                    {star}
                    {star}
                </li>
            );
    
        default:
            break;
    }
}

export default Star;

//<li><i class='fas fa-star'></i></li>

    // let ul = document.querySelector('.ratings');
    // let li = document.createElement('li');

    // for(let i = num; i > 0; i--){
    //     let item = document.createElement('i');
    //     item.classList.add("fas");
    //     item.classList.add("fa-star");
    //     li.appendChild(item);
    //     ul.appendChild(li);
    // }