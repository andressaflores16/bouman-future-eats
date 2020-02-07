import React from 'react';
import styled from 'styled-components'
import ImgDish from '../../img/dishImg.png'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';



const MainContainer = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display:flex;
  position: relative;
  margin-bottom: 8px;
  `

const TextContainer = styled.div`
  margin-left: 16px;
  margin-top: 18px;
`

const DishMainName = styled.p`
  width: 167px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  margin: 0px;
`

const DishDescription = styled.p`
  width: 200px;
  height: 30px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  margin: 0px;
  margin-top: 8px;
`
const Price = styled.p`
  width: 118px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin: 0px;
  margin-top: 4px;
`

const ButtonAdd = styled.button`
  width: 90px;
  height: 31px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #5cb646;
  background: white;
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;

`

const ButtonRemove = styled.button`
  width: 90px;
  height: 31px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #e02020;
  background: white;
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  p {
    color: #e02020
  }

`

const TextButton = styled.p`
  width: 48px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #5cb646;
  margin: 0px;
`

const SelectNumberOfItems = styled.select`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`

function FormDialog(props) {
  const [open, handleOpen] = React.useState(false)
  return (
    <div>
      <ButtonAdd variant="outlined" color="primary" onClick={() => handleOpen(true)}>
        <TextButton>Adicionar</TextButton>
      </ButtonAdd>
      <Dialog
        open={open}
        onClose={() => handleOpen(false)}
      >
        <DialogTitle >Selecione a quantidade</DialogTitle>
        <DialogContent>
        
          <SelectNumberOfItems>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </SelectNumberOfItems>
          
        
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleOpen(false)} color="primary">
            ADICIONAR AO CARRINHO
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}


export function DishCard(props) {

  return (
    <MainContainer>
      <img width='100' src={props.photoUrl} alt="PratoDoRestaurante" />
      <TextContainer>
        <DishMainName>{props.name}</DishMainName>
        <DishDescription>{props.description}</DishDescription>
        <Price>{`R$ ${props.price}0`}</Price>
        {/* <ButtonAdd>
          <TextButton>Adicionar</TextButton>
        </ButtonAdd> */}
        <FormDialog />
      </TextContainer>
    </MainContainer>
  );
}





