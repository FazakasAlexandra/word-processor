import React, { useState } from 'react'

export const BaseButton = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    },
  ) => {
    const [hover, setHover] = useState(false)
    const text = 'Verynicebutton'
    return (
      <div style={{ position: "relative" }}>
        <button
          className="base-button"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseOver={() => setHover(true)}
          style={{
            backgroundColor: active || hover ? 'pink' : 'inherit',
            padding: '0.5rem',
            borderRadius: '5px'
          }}
          {...props}
          ref={props.ref}
        ></button>
        {
          hover && props.label && <span style={{
            textAlign: "center",
            position: 'absolute',
            bottom: '-50px',
            left: '0px',
            backgroundColor: 'white',
            padding: '10px',
            boxShadow: "0px 9px 61px rgb(0 0 0 / 25%)",
            borderRadius: '5px',
            width: '120px'
          }}
          >
            {props.label}
          </span> || null}
      </div >
    )
  }
)
