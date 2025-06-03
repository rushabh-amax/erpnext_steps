import React from "react"

function HeadingIcon({ icon: Icon, title = "Heading" }) {
  return (
    <div className="flex items-center gap-2 mt-4">
      {Icon && <Icon className="w-5 h-5 text-black dark:text-gray-500" />}
      <h4 className="capitalize text-2xl text-black dark:text-gray-500">{title}</h4>
    </div>
  )
}

export default HeadingIcon
