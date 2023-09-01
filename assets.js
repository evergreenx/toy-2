export const styles = `
    .widget__container * {
        box-sizing: border-box;
    }        

    h3, p, input {
        margin: 0;
        padding: 0;
    }

    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 12px 12px rgba(0, 0, 0, 0.08);
        width: 400px;
        overflow: auto;
        right: -25px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #fff;
        border-radius: 10px;
        box-sizing: border-box;

    }

    .widget__icon {
        cursor: pointer;
        width: 60%;
        position: absolute;
        top: 18px;
        left: 16px;
        transition: transform .3s ease;
    }

    .widget__hidden {
        transform: scale(0);
    }
    .button__container {
        border: none;
        background-color: #FF5BBC;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }

    .widget__container.hidden {
        max-height: 0px;
    }

    .widget__header {
        padding: 1rem 2rem 1.5rem;
        background-color: #FF5BBC;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
        background-color: rgb(255, 91, 188);
        text-color: white;
        padding: 20px 40px 20px 40px;
    }

    .widget__header h3 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    form {
        padding: 2rem 1rem 1.5rem;
    }

    form .form__field {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .form__field label {
        margin-bottom: 8px;
        font-size: 14px;
    }

    .form__field input,
    .form__field textarea {
        border: 1px solid #000000ad;
        border-radius: 3px;
        padding: 8px 10px;
        background-color: #fff;
    }

    .form__field input {
        height: 48px;
    }

    .form__field textarea::placeholder {
        font-family: Helvetica, Arial ,sans-serif;
    }

    form button {
        height: 48px;
        border-radius: 6px;
        font-size: 18px;
        background-color: #000;
        color: #fff;
        border: 0;
        width: 100%;
        cursor: pointer;
    }

    form button:hover {
        background-color: rgba(0, 0, 0, 95%);
    }

    .chat__container{
        padding: 20px;
    }

    .chat__messages-container{
        max-height: 300px;
        padding: 10px;
        border: none;
        border-radius: 8px;
        overflow-y: auto;
    }

    .chat__input{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
    }

    .chat__input input{
        border-style: solid;
        border-color: rgb(209 213 219);
        border-width: 1px;
        font-size: 16px;
        font-weight: 500;
        border-radius: 8px;
        width: 300px;
        height: 40px;
        padding: 0 12px 0 12px;
    }

    .chat__input input:focus{
        border-color: blue;
        box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        outline: 2px solid transparent;
    }

    .chat__input button{
        margin-left: 10px;
        padding: 10px 20px 10px 20px;
        color: white;
        border-radius: 9999px;
    }

    .chat__input button:focus{
        outline: 2px solid transparent;
        box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        border-color: rgb(147 197 253);
    }

    .chat__message__user{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        background-color: rgb(254 226 226);
        color: rgb(30 58 138);
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 8px;
        text-align: right;
    }

    .chat__message__bot{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        color: white;
        background-color: rgb(255, 91, 188);
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 8px;
        text-align: left;
    }
`;

export const MESSAGE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
`;

export const CLOSE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;
