import CallHistoryItem from "@/src/components/CallListScreen/CallHistoryItem";
import HeaderTabSwitch from "@/src/components/CallListScreen/HeaderTabSwitch";
import KeyboardSafeArea from "@/src/components/common/KeyboardSafeArea";
import MyPressable from "@/src/components/common/MyPressable";
import {colors} from "@/src/constants/colors";
import {Screens} from "@/src/constants/screens";
import {spacing} from "@/src/constants/spacing";
import {styles} from "@/src/styles/screens/callListScreenStyles";
import {CallFilterOptionView} from "@/src/types/calls/callFilterOptionView";
import {CallsStackNavigatorParamList} from "@/src/types/common/navigation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useLayoutEffect, useState} from "react";
import {FlatList, Text} from "react-native";
type ScreenProps = NativeStackScreenProps<CallsStackNavigatorParamList, Screens.CALLLIST>;
type CallRecord = {
  id: string;
  name: string;
  avatar: string;
  status: "incoming" | "outgoing" | "missed";
  date: string;
  timestamp: Date;
};

// Tạo mảng dữ liệu mẫu
const callHistory: CallRecord[] = [
  {
    id: "1",
    name: "Martin Randolph",
    avatar: "/avatars/martin.jpg",
    status: "outgoing",
    date: "10/13/19",
    timestamp: new Date("2019-10-13T14:30:00"),
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "/avatars/sarah.jpg",
    status: "incoming",
    date: "10/13/19",
    timestamp: new Date("2019-10-13T10:15:00"),
  },
  {
    id: "3",
    name: "David Wilson",
    avatar: "/avatars/david.jpg",
    status: "missed",
    date: "10/12/19",
    timestamp: new Date("2019-10-12T16:45:00"),
  },
  {
    id: "4",
    name: "Emma Davis",
    avatar: "/avatars/emma.jpg",
    status: "outgoing",
    date: "10/12/19",
    timestamp: new Date("2019-10-12T09:20:00"),
  },
  {
    id: "5",
    name: "James Miller",
    avatar: "/avatars/james.jpg",
    status: "incoming",
    date: "10/11/19",
    timestamp: new Date("2019-10-11T18:10:00"),
  },
  {
    id: "6",
    name: "Olivia Smith",
    avatar: "/avatars/olivia.jpg",
    status: "missed",
    date: "10/11/19",
    timestamp: new Date("2019-10-11T08:30:00"),
  },
  {
    id: "7",
    name: "Liam Johnson",
    avatar: "/avatars/liam.jpg",
    status: "incoming",
    date: "10/10/19",
    timestamp: new Date("2019-10-10T15:25:00"),
  },
  {
    id: "8",
    name: "Ava Brown",
    avatar: "/avatars/ava.jpg",
    status: "outgoing",
    date: "10/10/19",
    timestamp: new Date("2019-10-10T11:00:00"),
  },
  {
    id: "9",
    name: "Noah Williams",
    avatar: "/avatars/noah.jpg",
    status: "missed",
    date: "10/09/19",
    timestamp: new Date("2019-10-09T20:40:00"),
  },
  {
    id: "10",
    name: "Isabella Jones",
    avatar: "/avatars/isabella.jpg",
    status: "incoming",
    date: "10/08/19",
    timestamp: new Date("2019-10-08T13:15:00"),
  },
  {
    id: "11",
    name: "William Garcia",
    avatar: "/avatars/william.jpg",
    status: "outgoing",
    date: "10/08/19",
    timestamp: new Date("2019-10-08T09:45:00"),
  },
  {
    id: "12",
    name: "Sophia Martinez",
    avatar: "/avatars/sophia.jpg",
    status: "missed",
    date: "10/07/19",
    timestamp: new Date("2019-10-07T07:30:00"),
  },
];
const missedCall: CallRecord[] = callHistory.filter((item) => item.status === "missed");
//
const CallListScreen = ({navigation}: ScreenProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentView, setCurrentView] = useState<CallFilterOptionView>(CallFilterOptionView.ALL);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MyPressable style={styles.headerLeftContainer} onPress={handleToggleEdit}>
          <Text style={styles.headerLeftText}>{isEditing ? "Done" : "Edit"}</Text>
        </MyPressable>
      ),

      headerRight: () =>
        isEditing ? (
          <MyPressable style={styles.headerRightContainer}>
            <Text style={styles.headerLeftText}>Clear</Text>
          </MyPressable>
        ) : (
          <MyPressable style={styles.headerRightContainer}>
            <MaterialIcons name="add-call" size={spacing.s24} color={colors.primary} />
          </MyPressable>
        ),
      headerTitle: () => <HeaderTabSwitch selected={currentView} onHandlerSwitchView={handlerHandlerSwitchView} />,
    });
  }, [navigation, isEditing, currentView]);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handlerHandlerSwitchView = (option: CallFilterOptionView) => {
    setCurrentView(option);
  };

  const handlerCall = () => {
    //logic call
  };

  const handlerNavigateDetailScreen = () => {
    navigation.navigate(Screens.CONTACTDETAIL);
  };

  return (
    <KeyboardSafeArea>
      <FlatList
        data={currentView === "missed" ? missedCall : callHistory}
        renderItem={({item}) => (
          <CallHistoryItem
            onCall={handlerCall}
            onNavigateDetailCallScreen={handlerNavigateDetailScreen}
            callRecord={item}
            isEditing={isEditing}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: spacing.s3}}
        keyboardShouldPersistTaps="handled"
      />
    </KeyboardSafeArea>
  );
};

export default CallListScreen;
