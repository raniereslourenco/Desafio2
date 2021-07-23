import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    *{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    body {
        background-image: url(https://www.zastavki.com/pictures/originals/2012/Sport_The_swimmer_in_the_pool_036150_.jpg);
        background-size: cover;
        background-attachment: fixed;
    }

    html {
    scroll-behavior:smooth;
    }

`