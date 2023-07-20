import { ReactNode } from "react";

interface IButton {
    color?: "primary" | "accent" | "disabled",
    variant?: "contained" | "outlined",
    onClick?: () => {},
    children: string | ReactNode
}

interface IButtonVariants {
  [key: string]: {
    [key: string]: string
  }
}

const buttonVariants:IButtonVariants = {
    contained:{
        primary:"flex gap-2 bg-primary-900 text-primary-100 hover:bg-primary-500 active:border-2 border-primary-900 px-7 py-3 rounded-2xl uppercase font-roboto font-bold text-lg",

        accent:"flex gap-2 bg-accent-900 text-accent-100 hover:bg-accent-500 active:border-2 border-accent-900 px-7 py-3 rounded-2xl uppercase font-roboto font-bold text-lg",

        disabled:"flex gap-2 bg-neutral-100 text-neutral-200 px-7 py-3 rounded-2xl uppercase font-roboto font-bold text-lg"
    },
    outlined: {
        primary:"flex gap-2 text-primary-900 bg-transparent hover:bg-primary-100 hover:bg-primary-100 active:bg-primary-500 active:text-primary-100 border-[3px] border-primary-900 px-7 py-3 rounded-2xl uppercase font-roboto font-bold text-lg",

        accent:"flex gap-2 text-accent-900 bg-transparent hover:bg-accent-100 hover:bg-accent-100 active:bg-accent-500 active:text-accent-100 border-[3px] border-accent-900 px-7 py-3 rounded-2xl uppercase font-roboto font-bold text-lg",

        disabled:"flex gap-2 bg-neutral-100 text-neutral-200 bg-transparent border-[3px] border-neutral-200 px-7 py-3 rounded-2xl uppercase font-roboto font-bold text-lg"
    },
}

const Button = ({ color = "primary", variant = "contained", children, onClick }:IButton) : ReactNode => {

    const selectedVariant = buttonVariants[variant][color]

    return ( 
        <button onClick={ onClick } disabled={ color === "disabled" ? true : false }  className={ selectedVariant }>
            { children }
        </button>
     );
}
 
export default Button; 