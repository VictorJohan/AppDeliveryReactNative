import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryListScreen } from '../views/admin/category/list/CategoryList';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { AdminProfileInfoScreen } from '../views/admin/profile/info/ProfileInfo';
import { Image } from 'react-native';
import { MyColors } from '../theme/AppTheme';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AdminCategoryListScreen"
        component={AdminCategoryListScreen}
        options={
          {
            title: 'Categorias',
            tabBarLabel: 'Categorias',
            tabBarLabelStyle: { fontSize: 15 },
            tabBarActiveTintColor: MyColors.primary,
            tabBarIcon: ({ color }) => (
              <Image style={{ width: 25, height: 25 }} source={require('../../assets/list.png')} />

            )
          }
        }
      />

      <Tab.Screen name="AdminOrderListScreen"
        component={AdminOrderListScreen} 
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

      <Tab.Screen name="AdminProfileInfoScreen"
        component={AdminProfileInfoScreen} 
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