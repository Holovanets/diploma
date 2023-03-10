import React, { FC } from 'react'
import { PropsWithChildren } from 'react'
import { View } from 'react-native'

type ISeparator = {
	height?: number | undefined
	width?: number | undefined
}

const Separator: FC<ISeparator> = ({ height, width }) => (
	<View style={{ height, width }} />
)

Separator.defaultProps = {
	height: 0,
	width: 0
}

export default Separator
