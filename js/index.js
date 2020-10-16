function setLocale(tick) {
    var locale = {
        YEAR_PLURAL: '연',
        YEAR_SINGULAR: '연',
        MONTH_PLURAL: '월',
        MONTH_SINGULAR: '월',
        DAY_PLURAL: '일',
        DAY_SINGULAR: '일',
        HOUR_PLURAL: '시',
        HOUR_SINGULAR: '시',
        MINUTE_PLURAL: '분',
        MINUTE_SINGULAR: '분',
        SECOND_PLURAL: '초',
        SECOND_SINGULAR: '초',
    };
    for (var key in locale) {
        if (!locale.hasOwnProperty(key)) { continue; }
        tick.setConstant(key, locale[key]);
    }
}

function handleEpisodeFirstTickInit(tick) {
    setLocale(tick);
    Tick.count.up('2018-10-24T21:10:14', {
        format: ['y', 'M', 'd', 'h', 'm', 's'],
    }).onupdate = function (value) {
        tick.value = value;
    };

}

function handleEpisodePeriodTickInit(tick) {
    setLocale(tick);
    tick.value = [7, 7, 37, 27];
}

function handleEpisodeDurationSumTickInit(tick) {
    setLocale(tick);
    tick.value = [4, 9, 35, 8];
}

function handleEpisodeDurationAvgTickInit(tick) {
    setLocale(tick);
    tick.value = [1, 8, 7];
}

function handleEpisodeLongTickInit(tick) {
    setLocale(tick);
    tick.value = [2, 27, 58];
}

function handleEpisodeShortTickInit(tick) {
    setLocale(tick);
    tick.value = [0, 4, 12];
}

var colors = [
    '#519aba',
    '#8dc149',
    '#e37933',
    '#f55385',
    '#a074c4',
    '#cc3e44',
    '#7494a3',
    '#cbcb41',
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var app = new Vue({
    el: '#app',
    data: {
        member_44bits_count: member_44bits_count,
        member_guest_count: member_guest_count,
        topic_category: topic_category,
        topic_category_count: topic_category_count,
        sum_category_count: sum_category_count,
        link_hostname_count: link_hostname_count,
    },
    methods: {
        wordcloudColor(word) {
            return colors[getRandomInt(0, 8)];
        }
    },
});