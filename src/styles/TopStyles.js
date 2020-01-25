import styled from 'styled-components';

export const Container = styled.div`
	background-color: #161616;
	display: flex;
	justify-content: space-between;
    
`;
 Container.Item1 = styled.div`
	margin-left:150px;
	/* background-color: gray; */
	display: flex;
	justify-content: space-around;
	width: 33.3%;
`;
Container.Item2 = styled.div`
	/* background-color: gray; */
	display: flex;
	justify-content: space-around;
	align-content: center;
	align-items: center;
	width: 33.3%;
`;
export const P = styled.h3`
	/* display: flex; */
    /* align-items: center; */
    color: #999;
	/* font-size: 16px; */
	font-family: Arial, Helvetica, sans-serif;
    :hover{
        color:white;
        cursor: pointer;
    }
`;

