import React from "react";
import { Slot } from "expo-router";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import schema from "@components/day22/model/schema";
import migrations from "@components/day22/model/migrations";

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: true /* Platform.OS === 'ios' */,
  // (optional, but you should implement this method)
  onSetUpError: (error) => {
    console.log('error', error)
    // Database failed to load -- offer the user to reload the app or log out
  },
});
const LocalAppLayout = () => {
  console.warn("Configure watermelonDB");
  return <Slot />;
};

export default LocalAppLayout;
