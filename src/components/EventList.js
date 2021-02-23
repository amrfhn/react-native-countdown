import React, { Component } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 5,
    },
});

class EvenList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                })),
            });
        }, 1000);

        const events = require('../data/db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({ events })
    }

    render() {
        return (
            <React.Fragment>
                {/* <Text>Natasha Aimilfitreen</Text> */}
                <FlatList
                    style={styles.list}
                    data={this.state.events}
                    renderItem={({ item }) => <EventCard event={item} />}
                    keyExtractor={item => item.id}
                />
            </React.Fragment>
        )
    }
}

export default EvenList;