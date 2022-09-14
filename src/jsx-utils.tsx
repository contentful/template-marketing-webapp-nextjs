import React from 'react'

export type ContextValue<Type> = Type extends React.Context<infer X> ? X : never

export const WrapIf =
  (p: { when: boolean, wrap: (children: any) => any, children: any }) => (
    p.when
      ? p.wrap(p.children)
      : p.children
  )
