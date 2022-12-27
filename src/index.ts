// Adapted from https://github.com/iconify/iconify/blob/3fe91ddea3f421832a20aa5cf8d8ba4dfcbbe8f8/iconify-icon/react/src/iconify.ts
// License: https://github.com/iconify/iconify/blob/3fe91ddea3f421832a20aa5cf8d8ba4dfcbbe8f8/iconify-icon/react/license.txt

/* eslint-disable react/display-name */
import React from 'react'

/**
 * Properties for React component
 */
export interface Icon extends React.HTMLProps<HTMLElement> {
  icon: string | IconifyIcon
  mode?: 'style' | 'mask' | 'svg' | 'bg'
  inline?: boolean
  width?: string | number
  height?: string | number
  rotate?: string | number
  flip?: string
}

/**
 * @see https://docs.iconify.design/types/iconify-json.html
 */
export interface IconifyIcon {
  body: string
  left?: number
  top?: number
  width?: number
  height?: number
  rotate?: number
  hFlip?: boolean
  vFlip?: boolean
}

/**
 * React component
 */
export const Icon: React.FC<Icon> = React.forwardRef(
  (props: Icon, ref: React.ForwardedRef<HTMLElement>) => {
    const newProps: Record<string, unknown> = {
      ...props,
      ref,
    }

    // Stringify icon
    if (typeof props.icon === 'object') {
      newProps.icon = JSON.stringify(props.icon)
    }

    // Boolean
    if (!props.inline) {
      delete newProps.inline
    }

    // React cannot handle className for web components
    if (props.className) {
      newProps['class'] = props.className
    }

    return React.createElement('iconify-icon', newProps)
  },
) as any
