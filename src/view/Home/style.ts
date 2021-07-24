import styled from 'styled-components';

export const Container = styled.div`
        width: 80%;
        margin: auto;

        .nav{
            display: flex;
            align-items: center;
            justify-content: space-between;
            /* background: #fdca0f; */
            color: white; 


            .cart {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction:column;
            }
        }

        section {
            height: 100%;
            width: 100%;
            /* background: #e2e2; */
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;

        .product-content {
            display: grid;
            text-align: center;
            height: 310px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
            margin: 12px;
            width: 25%;

        }

            button{
            width: 100%;
            height: 30px;
            margin-bottom: 10px;
            text-align: center;
            border-radius: 12px;
            background: #00ff00;
            color: #000;  
        }
            button:hover{
                color: white;
                font-weight: 700;
                transition: 0.3s;
                cursor: pointer;
            }
    }
`