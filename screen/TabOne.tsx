import React, { useImperativeHandle, useRef } from 'react';
import { Button, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ModalizePopup from '../component/ModalizePopup';
import { Modalize } from 'react-native-modalize';
import { Agenda, Calendar, CalendarList, LocaleConfig } from 'react-native-calendars/src';
import { Card } from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export default function TabOne() {
  LocaleConfig.locales['kr'] = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = 'kr';

  const [items, setItems] = React.useState({
    '2022-10-29': [{ day: '2022-11-03', height: 96, name: 'Item for 2022-11-03 #0' }],
    '2022-10-30': [{ day: '2022-11-03', height: 96, name: 'Item for 2022-11-03 #0' }],
    '2022-10-31': [{ day: '2022-11-03', height: 96, name: 'Item for 2022-11-03 #0' }],
    '2022-11-01': [{ day: '2022-11-03', height: 96, name: 'Item for 2022-11-03 #0' }],
    '2022-11-02': [{ day: '2022-11-03', height: 96, name: 'Item for 2022-11-03 #0' }],
    '2022-11-03': [{ day: '2022-11-03', height: 96, name: 'Item for 2022-11-03 #0' }],
    '2022-11-04': [
      { day: '2022-11-04', height: 55, name: 'Item for 2022-11-04 #0' },
      { day: '2022-11-04', height: 80, name: 'Item for 2022-11-04 #1' },
      { day: '2022-11-04', height: 67, name: 'Item for 2022-11-04 #2' },
    ],
    '2022-11-05': [
      { day: '2022-11-05', height: 68, name: 'Item for 2022-11-05 #0' },
      { day: '2022-11-05', height: 22, name: 'Item for 2022-11-05 #1' },
      { day: '2022-11-05', height: 143, name: 'Item for 2022-11-05 #2' },
    ],
    '2022-11-06': [
      { day: '2022-11-06', height: 105, name: 'Item for 2022-11-06 #0' },
      { day: '2022-11-06', height: 148, name: 'Item for 2022-11-06 #1' },
      { day: '2022-11-06', height: 47, name: 'Item for 2022-11-06 #2' },
    ],
    '2022-11-07': [
      { day: '2022-11-07', height: 96, name: 'Item for 2022-11-07 #0' },
      { day: '2022-11-07', height: 108, name: 'Item for 2022-11-07 #1' },
      { day: '2022-11-07', height: 10, name: 'Item for 2022-11-07 #2' },
    ],
    '2022-11-08': [{ day: '2022-11-08', height: 11, name: 'Item for 2022-11-08 #0' }],
    '2022-11-09': [
      { day: '2022-11-09', height: 48, name: 'Item for 2022-11-09 #0' },
      { day: '2022-11-09', height: 121, name: 'Item for 2022-11-09 #1' },
    ],

    '2022-11-11': [
      { day: '2022-11-11', height: 120, name: 'Item for 2022-11-11 #0' },
      { day: '2022-11-11', height: 120, name: 'Item for 2022-11-11 #0' },
      { day: '2022-11-11', height: 120, name: 'Item for 2022-11-11 #0' },
    ],
    '2022-11-12': [
      { day: '2022-11-12', height: 135, name: 'Item for 2022-11-12 #0' },
      { day: '2022-11-12', height: 30, name: 'Item for 2022-11-12 #1' },
      { day: '2022-11-12', height: 83, name: 'Item for 2022-11-12 #2' },
    ],
    '2022-11-16': [
      { day: '2022-11-12', height: 135, name: 'Item for 2022-11-12 #0' },
      { day: '2022-11-12', height: 30, name: 'Item for 2022-11-12 #1' },
      { day: '2022-11-12', height: 83, name: 'Item for 2022-11-12 #2' },
    ],
    '2022-11-17': [
      { day: '2022-11-12', height: 135, name: 'Item for 2022-11-12 #0' },
      { day: '2022-11-12', height: 30, name: 'Item for 2022-11-12 #1' },
      { day: '2022-11-12', height: 83, name: 'Item for 2022-11-12 #2' },
    ],
    '2022-11-18': [
      { day: '2022-11-12', height: 135, name: 'Item for 2022-11-12 #0' },
      { day: '2022-11-12', height: 30, name: 'Item for 2022-11-12 #1' },
      { day: '2022-11-12', height: 83, name: 'Item for 2022-11-12 #2' },
    ],
    '2022-11-19': [{ day: '2022-11-12', height: 83, name: 'Item for 2022-11-12 #2', color: '#aaf' }],
    '2022-11-20': [],
    '2022-11-21': [],
    '2022-11-22': [],
    '2022-11-23': [],
    '2022-11-24': [],
    '2022-11-25': [],
  });

  // const loadItems = (day: { dateString: string; day: number; month: number; timestamp: number; year: number }) => {
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);

  //       if (!items[strTime]) {
  //         items[strTime] = [];

  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: 'Item for ' + strTime + ' #' + j,
  //             height: Math.max(10, Math.floor(Math.random() * 150)),
  //             day: strTime,
  //           });
  //         }
  //       }
  //     }
  //     const newItems = {};
  //     Object.keys(items).forEach((key) => {
  //       newItems[key] = items[key];
  //     });
  //     setItems(newItems);
  //   }, 1000);
  // };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Card>
          <Card.Content>
            <View>
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={items}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={(month) => {
          console.log('trigger items loading');
        }}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={(calendarOpened) => {
          console.log(calendarOpened);
        }}
        // Callback that gets called on day press
        onDayPress={(day) => {
          console.log('day pressed');
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={(day) => {
          console.log('day changed');
        }}
        minDate={new Date().toDateString()}
        pastScrollRange={1}
        futureScrollRange={4}
        // Specify how each item should be rendered in agenda
        renderItem={renderItem}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderDay={(day, item) => {
          return <View />;
        }}
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        onMonthChange={(item) => {
          console.log('onMonthChange');
        }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={(item) => {
          return renderItem({
            name: String(item) + 'testsetsejktbsajkldgbskljgbsjkdfbslkjfbsaldjkfblskafbsaldk',
          });
        }}
        renderEmptyData={() => {
          return (
            <Text>
              testsetsejktbsajkldgbskljgbsjkdfbslkjfbsaldjkfblskafbsaldk testsetsejktbsajkldgbskljgbsjkdfbslkjfbsaldjkfblskafbsaldk testsetsejktbsajkldgbskljgbsjkdfbslkjfbsaldjkfblskafbsaldk
              testsetsejktbsajkldgbskljgbsjkdfbslkjfbsaldjkfblskafbsaldk testsetsejktbsajkldgbskljgbsjkdfbslkjfbsaldjkfblskafbsaldk testsetsejktbsajkldgbskljgbsjkdfbslkjfbsaldjkfblskafbsaldk
            </Text>
          );
        }}
        onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
        // Agenda theme
        theme={{
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue',
        }}
        // Agenda container style
        style={{}}
      />
      {/* <Agenda
        onMonthChange={(item) => {
          console.log(item);
        }}
        items={items}
        minDate={new Date().toDateString()}
        pastScrollRange={1}
        futureScrollRange={4}
        //loadItemsForMonth={loadItems}
        scrollEventThrottle={16}
        refreshControl={<></>}
        showClosingKnob={true}
        refreshing={false}
        renderItem={renderItem}
        theme={{
          todayTextColor: '#aaa',
          todayBackgroundColor: '#ffa',
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});
