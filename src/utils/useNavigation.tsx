import React, { useContext } from 'react'
import { NavigationContext, NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation'

export default function useNavigation() {
    return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, NavigationParams>
}
