import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import { Icon, Button } from 'native-base';

const API_KEY = '894c0c1d03546d1843b5efd334d6e479';

export default class InformationTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-globe' style={{ color: tintColor }} />
        )
    }

    // 현재 위치 받아오는 함수
    componentDidMount() {
        // navigator.geolocation.getCurrentPosition(
        //   (position) =>
        //     console.log(position)
        //     // this._getWeather(position.coords);
        // );
    }

    // 날씨 받아오는 함수
    _getWeather({latitude, longitude}) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json()) // 응답값을 json으로 변환
        .then(json => {
            console.log(json)
        });
    }

    state = {item: ''}
    updateItem = (item) => {
        this.setState( {item: item} )
    }

    constructor(props) {
        super(props);
        this.state = { 
            clicked: true,
        };
    }

  

    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };

    getListViewItem = (item) => {  
        Alert.alert(item.key);  
    }

    render() {
        let pressButton = 1;
        let list = <FlatList  
                        data={[  
                            {key: '강릉시 "숙박업소 바가지 논란 억울…타 지역도 마찬가지"'},
                            {key: '태풍 크로사 북상 동해안 호우·강풍특보…강릉 95.5㎜'}, 
                            {key: '태풍 ‘크로사’ 북상 설악산 입산통제…강릉 호우경보'},
                            {key: '강릉 중앙시장 먹거리, 경포대 맛집 \'부자대게\''},  
                            {key: '강릉지역 성수기 숙박요금이 60% 높아'},
                            {key: '싱싱한 홍게를 맛볼 수 있는 강릉 주문진 맛집 \'주문진 홍게무한리필\''},
                            {key: '강릉 맛집 \'최대게 본점\', 경포대·주문진 인근 가볼만한곳으로 여행객들 줄 ...'},  
                            {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                            {key: 'Ruby'},{key: 'Rails'},{key: '.Net'}
                        ]}  
                        renderItem={({item}) =>  
                            <Text style={styles.item}  
                                onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                        ItemSeparatorComponent={this.renderSeparator}  
                    />;

        function NewsList(props) {
            pressButton = 1;
            list = <FlatList  
                        data={[  
                            {key: '뉴스1'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                            {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                            {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                            {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                            {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                            {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                            {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                        ]}  
                        renderItem={({item}) =>  
                            <Text style={styles.item}  
                                onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                        ItemSeparatorComponent={this.renderSeparator}  
                    />
        }

        function AccidentList(props) {
            pressButton = 2;
            list = <FlatList  
                        data={[  
                            {key: '사고1'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                            {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                            {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                            {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                            {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                            {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                            {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                        ]}  
                        renderItem={({item}) =>  
                            <Text style={styles.item}  
                                onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                        ItemSeparatorComponent={this.renderSeparator}  
                    />
        }

        function BagajiList(props) {
            pressButton = 3;
            list = <FlatList  
                        data={[  
                            {key: '바가지1'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                            {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                            {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                            {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                            {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                            {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                            {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                        ]}  
                        renderItem={({item}) =>  
                            <Text style={styles.item}  
                                onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                        ItemSeparatorComponent={this.renderSeparator}  
                    />
        }

        function pressingButton(props) {
            if (pressButton == 1) {
                return <FlatList  
                    data={[  
                        {key: '뉴스1'},{key: '뉴스2'}, {key: '뉴스3'},{key: '뉴스4'},  
                        {key: '뉴스5'},{key: '뉴스6'},{key: '뉴스7'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                            onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />
            }
            else if (pressButton == 2) {
                return <FlatList  
                    data={[  
                        {key: '사고1'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                            onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />
            }
            else {
                return <FlatList  
                    data={[  
                        {key: '바가지1'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}
                    ]}  
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                            onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />
            }
        }
        
        console.log(pressButton);

        return (
            <View style={styles.container}>
                <View style={styles.case1}>
                    <View style={{padding: 10, flexDirection: 'row', borderRightWidth: 1, paddingTop: 25}}>
                        <View style={{flexDirection: 'column'}}>
                            <Image
                                style={{width: 60, height: 60}}
                                source={require('../../assets/images/sun.png')}
                            />
                            <Text>오늘</Text>
                            <Text>31℃ - 23℃</Text>
                        </View>
                        <View style={{flexDirection: 'column', paddingTop: 20}}>
                            <Text style={{fontSize: 35}}>27℃</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', padding: 10, borderRightWidth: 1, paddingTop: 25}}>
                        <Image
                            style={{width: 60, height: 60}}
                            source={require('../../assets/images/rain.png')}
                        />
                        <Text>내일</Text>
                        <Text>29℃ - 21℃</Text>
                    </View>
                    <View style={{flexDirection: 'column', padding: 10, paddingTop: 25}}>
                        <Image
                            style={{width: 70, height: 60}}
                            source={require('../../assets/images/cloudy_sun.png')}
                        />
                        <Text>모레</Text>
                        <Text>29℃ - 20℃</Text>
                    </View>
                </View>
                {/* <View style={styles.case2}>
                    <View style={{flex: 1}}>
                        <Text>품목</Text>
                        <Picker selectedValue = {this.state.item} onValueChange = {this.updateItem}>
                            <Picker.Item label = "품목1" value = "1000" />
                            <Picker.Item label = "품목2" value = "2500" />
                            <Picker.Item label = "품목3" value = "3000" />
                        </Picker>
                    </View>
                    <View style={{flex: 1}}>
                        <Text>가격</Text>
                        <Text>{this.state.item} ￦</Text>
                    </View>
                </View> */}
                <View style={styles.case3}>
                    <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity value="news" onPress={NewsList} style={{paddingLeft: 35}}>
                        <Text style = {styles.text1}>
                            NEWS
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity value="accident" onPress={AccidentList} style={{alignContent: "center"}}>
                        <Text style = {styles.text2}>
                            사건 / 사고
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity value="news" onPress={BagajiList}>
                        <Text style = {styles.text3}>
                            바가지
                        </Text>
                    </TouchableOpacity>
                    </View>
                    {list}
                    <TouchableOpacity>
                        <Text style={{textAlign: 'right', paddingRight: 5}}>더보기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }        
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    case1: {
        flex: 2,
        borderBottomWidth: 5,
        borderBottomColor: 'black',
        flexDirection: 'row',
        paddingTop: 10
    },
    case2: {
        flex: 2,
        flexDirection: 'row',
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderTopWidth: 5,
        borderBottomWidth: 5
    },
    case3: {
        flex: 5,
        paddingVertical: 10
    },
    text1: {
        borderWidth: 1,
        padding: 25,
        backgroundColor: 'white',
        color: 'black',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderRightWidth: 0,
        height: 30
     },
     text2: {
        borderWidth: 1,
        padding: 25,
        backgroundColor: 'white',
        color: 'black',
        height: 30
     },
    text3: {
        borderWidth: 1,
        padding: 25,
        backgroundColor: 'white',
        color: 'black',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderLeftWidth: 0,
        height: 30
     },
     item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },
});