import React from "react";
import { Card, Icon, Row, Col } from 'antd';
import "./Credits.css";

const { Meta } = Card;

const Credits = () => {

  return (
    <div className={"credits"}>
      <h1>Data Sources</h1>
        <div style={{ padding: '0px 150px' }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card
                        style={{ margin: '10px auto' }}
                        cover={<img alt="example" src="https://static.thenounproject.com/png/653991-200.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                        title="School Locations"
                        description={<a href="https://2018.hackerspace.govhack.org/data_sets/295">https://2018.hackerspace.govhack.org/data_sets/295</a>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ margin: '10px auto' }}
                        cover={<img alt="example" src="http://icons.iconarchive.com/icons/icons8/android/256/Sports-Football-icon.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                        title="Sport and Recreation Facilities"
                        description={<a href="https://2018.hackerspace.govhack.org/data_sets/275">https://2018.hackerspace.govhack.org/data_sets/275</a>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ margin: '10px auto' }}
                        cover={<img alt="example" src="https://png.icons8.com/recycling/win8/1600" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                        title="LCA kerbside recycling calculator"
                        description={<a href="https://2018.hackerspace.govhack.org/data_sets/274">https://2018.hackerspace.govhack.org/data_sets/274</a>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ margin: '10px auto' }}
                        cover={<img alt="example" src="https://static.thenounproject.com/png/172756-200.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                        title="Aged Care"
                        description={<a href="https://2018.hackerspace.govhack.org/data_sets/346">https://2018.hackerspace.govhack.org/data_sets/346</a>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ margin: '10px auto' }}
                        cover={<img alt="example" src="https://static.thenounproject.com/png/8847-200.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                        title="Crime Stats Agency"
                        description={<a href="https://2018.hackerspace.govhack.org/data_sets/300">https://2018.hackerspace.govhack.org/data_sets/300</a>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ margin: '10px auto' }}
                        cover={<img alt="example" src="https://static.thenounproject.com/png/31668-200.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                        title="Melbourne Urban Forest Visual"
                        description={<a href="https://data.melbourne.vic.gov.au/">https://data.melbourne.vic.gov.au/</a>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ margin: '10px auto' }}
                        cover={<img alt="example" src="http://cdn.onlinewebfonts.com/svg/img_460058.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                        title="2016 Community Profiles"
                        description={<a href="https://2018.hackerspace.govhack.org/data_sets/269">https://2018.hackerspace.govhack.org/data_sets/269</a>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ margin: '10px auto' }}
                        cover={<img alt="example" src="https://static.thenounproject.com/png/42421-200.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                        title="2018 Employment Projections"
                        description={<a href="https://2018.hackerspace.govhack.org/data_sets/116">https://2018.hackerspace.govhack.org/data_sets/116</a>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ margin: '10px auto' }}
                        cover={<img alt="example" src="http://cdn.onlinewebfonts.com/svg/img_574465.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                        title="Indigenous Health and Welfare services"
                        description={<a href="https://2018.hackerspace.govhack.org/data_sets/354">https://2018.hackerspace.govhack.org/data_sets/354</a>}
                        />
                    </Card>
                </Col>
            </Row>
            </div>
    </div>
  );
};

export default Credits;

// <ul>
//   <li>School Locations 'https://2018.hackerspace.govhack.org/data_sets/295' 'https://www.data.vic.gov.au/data/dataset/school-locations-2018'</li>
//   <li>Sport and Recreation Facilities 'https://2018.hackerspace.govhack.org/data_sets/275' 'https://www.data.vic.gov.au/data/dataset/sport-and-recreational-facilities'</li>
//   <li>LCA kerbside recycling calculator 'https://2018.hackerspace.govhack.org/data_sets/274' 'https://www.data.vic.gov.au/data/dataset/lca-kerbside-recycling-calculator'</li>
//   <li>Aged Care 'https://2018.hackerspace.govhack.org/data_sets/346' 'https://www.aihw.gov.au/reports/older-people/older-australia-at-a-glance/contents/summary'</li>
//   <li>Crime Stats Agency 'https://2018.hackerspace.govhack.org/data_sets/200' 'https://www.crimestatistics.vic.gov.au/crime-statistics/latest-crime-data'</li>
//   <li>Melbourne Urban Forest Visual 'https://data.melbourne.vic.gov.au/'</li>
//   <li>2016 Community Profiles 'https://2018.hackerspace.govhack.org/data_sets/269' 'https://www.multicultural.vic.gov.au/population-and-migration/victorias-diversity/community-profiles-2016-census'</li>
//   <li>2018 Employment Projections 'https://2018.hackerspace.govhack.org/data_sets/116' 'http://lmip.gov.au/default.aspx?LMIP/GainInsights/EmploymentProjections'</li>
//   <li>Indigenous Health and Welfare services 'https://2018.hackerspace.govhack.org/data_sets/354' 'https://www.aihw.gov.au/reports-statistics/health-welfare-services/indigenous-health-welfare-services/data'</li>
// </ul>