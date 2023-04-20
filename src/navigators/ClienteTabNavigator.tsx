import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClienteCategoryListScreen } from '../views/cliente/category/list/CategoryList';
import { ClienteOrderListScreen } from '../views/cliente/order/list/OrderList';
import { ClienteProfileInfoScreen } from '../views/cliente/profile/info/ProfileInfo';
import { Image } from 'react-native';
import { MyColors } from '../theme/AppTheme';

const Tab = createBottomTabNavigator();

export const ClienteTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ClienteCategoryListScreen" 
      component={ClienteCategoryListScreen}
      options={
        {
          title: 'Categorias',
          tabBarLabel: 'Categorias',
          tabBarLabelStyle: { fontSize: 15 },
          tabBarActiveTintColor: MyColors.primary,
          tabBarIcon: ({color}) => (
            <Image style={{width:25, height:25}} source={require('../../assets/list.png')} />
            
          )
        }
       }
      />
      
      <Tab.Screen name="ClienteOrderListScreen" 
      component={ClienteOrderListScreen}
      options={
        {
          title: 'Pedidos',
          tabBarLabel: 'Pedidos',
          tabBarLabelStyle: { fontSize: 15 },
          tabBarActiveTintColor: MyColors.primary,
          tabBarIcon: ({color}) => (
            <Image style={{width:25, height:25}} source={require('../../assets/orders.png')} />
            
          )
        }
       }
      />
      
      <Tab.Screen name="ClienteProfileInfoScreen" 
      component={ClienteProfileInfoScreen} 
      options={
        {
          title: 'Perfil',
          tabBarLabel: 'Perfil',
          tabBarLabelStyle: { fontSize: 15 },
          tabBarActiveTintColor: MyColors.primary,
          tabBarIcon: ({color}) => (
            <Image style={{width:25, height:25}} source={require('../../assets/user_menu.png')} />
            
          )
        }
       }
      />
    </Tab.Navigator>
  );
}