// SignupScreen.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function SignupScreen() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const onChange = (key, value) => setForm({ ...form, [key]: value });

  const onSubmit = () => {
    if (!form.name || !form.email || !form.password || !form.confirm) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (form.password !== form.confirm) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    Alert.alert("Success ✅", "Account Created Successfully!");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Create Account</Text>

          <Field
            label="Full Name"
            placeholder="Rahul Singh"
            value={form.name}
            onChangeText={(v) => onChange("name", v)}
          />
          <Field
            label="Email"
            placeholder="you@example.com"
            value={form.email}
            onChangeText={(v) => onChange("email", v)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Field
            label="Password"
            placeholder="••••••••"
            value={form.password}
            onChangeText={(v) => onChange("password", v)}
            secureTextEntry
          />
          <Field
            label="Confirm Password"
            placeholder="••••••••"
            value={form.confirm}
            onChangeText={(v) => onChange("confirm", v)}
            secureTextEntry
          />

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.85, transform: [{ scale: 0.99 }] },
            ]}
            onPress={onSubmit}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>

          <Text style={styles.helper}>
            Already have an account? <Text style={styles.link}>Log in</Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function Field({ label, ...props }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor="#8E8E93"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000" }, // pure dark iPhone look
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  field: { gap: 8 },
  label: {
    fontSize: 14,
    color: "#aaa",
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#1C1C1E", // iOS dark card background
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#2C2C2E",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  button: {
    marginTop: 10,
    backgroundColor: "#0A84FF", // iOS blue button
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#0A84FF",
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: { color: "white", fontSize: 17, fontWeight: "600" },
  helper: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 16,
    fontSize: 14,
  },
  link: { color: "#0A84FF", fontWeight: "600" },
});
