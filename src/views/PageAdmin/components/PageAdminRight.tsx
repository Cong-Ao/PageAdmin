import Visibility from '@mui/icons-material/Visibility'
import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
} from '@mui/material'
import ButtonIcons from '../../../components/ButtonIcons'
import ButtonPage from '../../../components/ButtonPage'
import InputPage from '../../../components/InputPage'
import TextA from '../../../components/TextA'
import TextP from '../../../components/TextP'
import TitleH4 from '../../../components/TitleH4'

function PageAdminRight(props) {
  const listIcont = [
    {
      items: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="MuiBox-root css-1xm97k1 iconify iconify--eva"
          width="2.2em"
          height="2.2em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="rgb(223, 62, 48)"
            d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93a6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44a.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29A10.12 10.12 0 0 0 11.57 22A10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"
          ></path>
        </svg>
      ),
    },
    {
      items: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="MuiBox-root css-1t0teiv iconify iconify--eva"
          width="2.2em"
          height="2.2em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="rgb(24, 119, 242)"
            d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"
          ></path>
        </svg>
      ),
    },
    {
      items: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="MuiBox-root css-32732k iconify iconify--eva"
          width="2.2em"
          height="2.2em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="rgb(28, 156, 234)"
            d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"
          ></path>
        </svg>
      ),
    },
  ]
  return (
    <PageAdminRightStyled>
      <TextP>
        Don’t have an account? <TextA href="/register"> Get started</TextA>
      </TextP>

      <ContentRightStyled>
        <TitleH4>Sign in to Minimal</TitleH4>
        <TextP> Enter your details below.</TextP>
        <div className="button__icons">
          {listIcont.map((item, idx) => (
            <ButtonIcons>{item.items}</ButtonIcons>
          ))}
        </div>
        <div className="or__item">
          <span>OR</span>
        </div>
        <InputPage typeInput="text" lableInput="Email address" />
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="password"
            label="Password"
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Visibility />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="forgot__password">
          <div className="forgot__password-content left">
            <Checkbox defaultChecked /> <span>Remember me</span>
          </div>
          <div className="forgot__password-content right">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <ButtonPage nameButton="Login" />
      </ContentRightStyled>
    </PageAdminRightStyled>
  )
}

const PageAdminRightStyled = styled('div')({
  maxWidth: '100%',
  flex: '1',
  p: {
    textAlign: 'right',
  },
})

const ContentRightStyled = styled('div')({
  maxWidth: '600px',
  margin: '0 auto',
  width: '100%',
  p: {
    textAlign: 'left',
    fontSize: '1.6rem',
    margin: '0px 0px 40px',
    lineHeight: '1.5',
    fontWeight: '400',
    color: 'rgb(99, 115, 129)',
  },
  '.button__icons': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1.5rem',
  },
  '.or__item': {
    margin: '24px 0px',
    flexShrink: '0',
    display: 'flex',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    border: '0px',
    span: {
      fontSize: '1.4rem',
      color: '#637381',
      paddingLeft: 'calc(9.6px)',
      paddingRight: 'calc(9.6px)',
    },
    '&:after': {
      position: 'relative',
      width: '100%',
      borderTop: 'thin solid rgba(145, 158, 171, 0.24)',
      top: '50%',
      content: '""',
      transform: 'translateY(50%)',
    },
    '&:before': {
      position: 'relative',
      width: '100%',
      borderTop: 'thin solid rgba(145, 158, 171, 0.24)',
      top: '50%',
      content: '""',
      transform: 'translateY(50%)',
    },
  },
  '.forgot__password': {
    display: 'flex',
    justifyContent: 'justify-content: space-between;',
    alignItems: 'center',
    width: '100%',
    marginTop: '2.4rem',
    fontSize: '1.6rem',
    '.forgot__password-content': {
      flex: '1',
    },
    '.forgot__password-content.right': {
      textAlign: 'right',
      a:{
        color:"rgb(32, 101, 209)",
      }
    },
    '.MuiButtonBase-root': {
      padding: '0px',
    },
    '.MuiSvgIcon-root': {
      height: '2rem',
      width: '2rem',
    },
  },
})

export default PageAdminRight
