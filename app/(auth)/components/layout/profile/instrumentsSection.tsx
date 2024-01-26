import { ChangeEvent, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextInputComponent from "../../../../../components/inputs/TextInputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface InstrumentsSectionProps {
  instruments: string[];
}

export default function InstrumentsSection({
  instruments,
}: InstrumentsSectionProps) {
  const [addInstrument, setAddInstrument] = useState(false);
  const [newInstrument, setNewInstrument] = useState("");

  const handleChangeEvent = (text: string) => {
    const event = {
      target: {
        value: text,
      },
    } as ChangeEvent<HTMLInputElement>;
    setNewInstrument(event.target.value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.addInstrument}>
        <View style={styles.instrumentField}>
          <TextInputComponent
            placeholder="Add instrument"
            value={""}
            handleChange={handleChangeEvent}
            keyboardType="default"
          />
        </View>
        <View style={styles.buttonHolder}>
          <TouchableOpacity style={styles.addButton}>
            <View style={styles.iconWrapper}>
              <FontAwesomeIcon style={styles.icon} icon={faPlus} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* {userProfile?.instruments.length > 0 && (
        <View>
          {data?.data?.userProfile?.instruments.map((instrument) => (
            <Text style={styles.bodyText}>{instrument}</Text>
          ))}
        </View>
      )} */}
      {instruments === undefined && !addInstrument && (
        <View>
          <Text style={styles.bodyText}>No instruments yet!</Text>
          <View style={styles.buttonHolder}>
            <TouchableOpacity
              onPress={() => {
                setAddInstrument(true);
              }}
            >
              <Text>Add instrument</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  addInstrument: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  instrumentField: {
    width: "80%",
  },
  buttonHolder: {
    width: "15%",
  },
  addButton: {
    backgroundColor: "#1f0ea1",
    padding: 15,
    borderRadius: 10,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
    color: "#fff",
  },
  bodyText: {
    fontSize: 20,
  },
});
