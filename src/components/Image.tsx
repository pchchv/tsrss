import { CSSProperties } from 'react'

interface ImageProps {
    className: string,
    src: string | undefined,
    FallbackComponent: () => JSX.Element
    style?: CSSProperties
}
