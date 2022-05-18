import styled from 'styled-components';

const StyledAddTransactionWrapper = styled.div`
    form {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;

        p {
            color: ${({theme}) => theme.colors.secondary};
            font-size: 18px;
            margin-bottom: 30px;

            @media(min-width: 450px) {
                font-size: 22px;
            }
        }

        .status {
            display: flex;
            justify-content: space-between;
            margin-bottom: 45px;

            /* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  max-width: 70px;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #cccc;
}

/* When the radio button is checked, add a primary background */
.container input:checked ~ .checkmark {
  background-color: ${({theme}) => theme.colors.primary};
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
        }
    }

    .tip {
        font-size: 18px;
        color: ${({theme}) => theme.colors.secondary};
        margin-bottom: 20px;
    }

    .tip {
        margin-top: 50px;
        font-weight: bold;
        font-size: 20px;
        display: flex;
        align-items: center;
        gap: 10px;

        @media (max-width: 850px) {
            flex-direction: column;
        }

        @media (min-width: 851px) {
            text-align: left;
        }

        svg {
            font-size: 28px;
        }
    }
`;

export default StyledAddTransactionWrapper;