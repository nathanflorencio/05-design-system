import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
