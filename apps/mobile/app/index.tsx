import { Camera, Map } from "@maplibre/maplibre-react-native";
import { StyleSheet, Text, View } from "react-native";

const developmentStyle =
  process.env.EXPO_PUBLIC_MAP_STYLE_URL ??
  "https://demotiles.maplibre.org/style.json";

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <Map
        mapStyle={developmentStyle}
        style={StyleSheet.absoluteFill}
        attribution
        compass
        scaleBar
      >
        <Camera
          initialViewState={{
            center: [-98.5795, 39.8283],
            zoom: 3.3,
          }}
        />
      </Map>
      <View pointerEvents="none" style={styles.header}>
        <Text style={styles.brand}>WaterScout</Text>
        <Text style={styles.subtitle}>Fishing, with the facts in view.</Text>
      </View>
      <View pointerEvents="none" style={styles.notice}>
        <Text style={styles.noticeTitle}>Foundation build</Text>
        <Text style={styles.noticeBody}>
          No verified fishing locations or regulations are loaded. Demo map
          only; not for navigation.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#e4eee8",
  },
  header: {
    position: "absolute",
    top: 58,
    left: 18,
    right: 18,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.94)",
  },
  brand: {
    color: "#103b35",
    fontSize: 21,
    fontWeight: "800",
  },
  subtitle: {
    marginTop: 2,
    color: "#657a74",
    fontSize: 12,
  },
  notice: {
    position: "absolute",
    right: 18,
    bottom: 24,
    left: 18,
    padding: 15,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.95)",
  },
  noticeTitle: {
    color: "#17332f",
    fontSize: 14,
    fontWeight: "700",
  },
  noticeBody: {
    marginTop: 4,
    color: "#526b63",
    fontSize: 12,
    lineHeight: 17,
  },
});
