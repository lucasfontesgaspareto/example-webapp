import React from 'react'
import { useDispatch } from 'react-redux'
import layoutActions from '../../modules/layout/layoutActions'
import routes from '../routes'
import CustomLoadable from '../shared/CustomLoadable'

function TabsLink(props) {
  const dispatch = useDispatch()

  const handleClick = (event) => {
    if (props.to) {
      const route = routes.privateRoutesTabs.find(route => route.path === props.to)
  
      if (route) {
        dispatch(layoutActions.doAddTab({
          path: props.to,
          name: props.options?.title || route.label || props.to.replace(':id', props.options?.id),
          Component: CustomLoadable({
            loader: route.loader
          }),
          options: props.options
        }))
      }
    }

    props.onClick && props.onClick(event)
  }

  return <span
    className={props.className}
    onClick={handleClick}
  >
    {props.children}
  </span>
}

export default TabsLink