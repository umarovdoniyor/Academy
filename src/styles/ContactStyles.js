import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid black;
	margin-top: 10em;
    height:1500px; 
	img {
		width: 50%;
		height: 400px;
		/* background-color: red; */
	}
	.header {
		font-family: Georgia, 'Times New Roman', Times, serif;
		text-align: center;
		text-transform: uppercase;
		margin: 3em;
	}
    .outerdiv{
        display: flex;
        /* background-color: red; */
    }
    .formdiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3em;
        margin-bottom: 3em;
    }
    .formWrapper{
        /* border: 2px dotted red; */
        width: 35%;
        height: 500px;
        /* border-radius: 20px; */
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }  
`;

export const StyledSelect = styled.input`
    font-size: 2em;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid grey;
    width:400px;
    text-align: center;
    /* background-color: #abb8c3; */
    border-radius: 10px;
    /* box-shadow: box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); */
    
`;
export const StyledErrorMessage = styled.div`
    color: red;
    font-size: 18px;
    margin-bottom: 15px;
`;
export const StyledLabel = styled.label`
    /* color: tomato; */
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
`;


