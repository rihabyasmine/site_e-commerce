

import React from "react"

const Formatcurrency = (number) => {
    const CURRENCY_FORMATTER =new Intl.NumberFormat(undefined,{currency:"DZD",style:"currency"})
    return CURRENCY_FORMATTER.format(number)
}
export default Formatcurrency