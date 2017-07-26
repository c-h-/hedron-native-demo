import React, {
  PropTypes,
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Page, Row, Column, Hidden } from 'hedron';

import styles from './styles';
import Random from './components/Random';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.*.js
      </Text>
      <Page>
        <Row>
          <Column sm={8} smShift={2} lg={6} lgShift={3}>
            <Hidden sm><Text>Hidden small</Text></Hidden>
          </Column>
        </Row>
        <Row>
          <Column sm={8} smShift={2} lg={6} lgShift={3}>
            <Text>This is a column that's centered using the shift props</Text>
          </Column>
        </Row>
        <Row>
          <Column fluid sm={4}>
            <Text>Fluid Columns</Text>
          </Column>
          <Column fluid sm={4}>
            <Text>It's a 12 column layout by default.</Text>
          </Column>
          <Column fluid sm={4}>
            <Row divisions={24}>
              <Column sm={24}>
                <Text>
                  But you can change the amount of columns by adding the
                  `divisions` property to a Row.
                </Text>
                <Text>It's fully embeddable as well!</Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </Page>
    </View>
  );
};

Home.contextTypes = {
  store: PropTypes.object,
};

export default Home;
