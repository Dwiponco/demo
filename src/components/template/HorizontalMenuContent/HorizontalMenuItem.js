import React from 'react'
import navigationIcon from 'configs/navigation-icon.config'
import { MenuItem } from 'components/ui'
import HorizontalMenuNavLink from './HorizontalMenuNavLink'

const HorizontalMenuItem = ({nav, isLink, manuVariant}) => {

	const { title, icon, path } = nav

	return (
		<MenuItem variant={manuVariant}>
			{icon && (
				<span className="text-2xl">
					{navigationIcon[icon]}
				</span>
			)}
			{(path && isLink)
				?
				<HorizontalMenuNavLink path={path}>
					{title}
				</HorizontalMenuNavLink>
				: 
				<span>{title}</span>
			}
		</MenuItem>
	)
}

export default HorizontalMenuItem