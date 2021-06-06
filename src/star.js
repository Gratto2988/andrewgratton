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