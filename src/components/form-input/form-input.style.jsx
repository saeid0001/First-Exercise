import styled , { css } from "styled-components";

const SubColor = "grey" ;
const MainColor = "black" ;

const ShrinkLabelStyle = css`
  top: -14px;
  font-size: 12px;
  color: ${MainColor};
`
export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`
export const FormInputLabel = styled.label`
  color: $sub-color;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({shrink})=> shrink && ShrinkLabelStyle}
`
export const FormInput = styled.input`
  background: none;
  background-color: white;
  color: ${SubColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${SubColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${ShrinkLabelStyle};
  }
` 




/*
$sub-color: grey;
$main-color: black;

@mixin shrinkLabel {
  top: -14px;
  font-size: 12px;
  color: $main-color;
}

.group {
  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid $sub-color;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      @include shrinkLabel();
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      @include shrinkLabel();
    }
  }
}

*/