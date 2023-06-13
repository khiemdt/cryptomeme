import React from 'react'

interface Props {
  show: boolean
  message: string
  classes?: string
}

const Error: React.FC<Props> = ({ show, message, classes }) => {
  if (show) return <div className={`font-maison-neue text-red-6 mt-2 ${classes}`}>{message}</div>
  return null
}

export default Error
