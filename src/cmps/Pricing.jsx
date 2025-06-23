import { InputNumber } from 'antd';
import { Select, Checkbox } from 'antd';


export function Pricing({ createGig, gig }) {
    const options = [
        { label: '1 Day Delivery', value: 1 },
        { label: '2 DAYS DELIVERY', value: 2 },
        { label: '3 DAYS DELIVERY', value: 3},
        { label: '4 DAYS DELIVERY', value: 4 },
        { label: '5 DAYS DELIVERY', value: 5 },
        { label: '6 DAYS DELIVERY', value: 6 },
        { label: '7 DAYS DELIVERY', value: 7 },
        { label: '8 DAYS DELIVERY', value: 8 },
        { label: '9 DAYS DELIVERY', value: 9 },
        { label: '10 DAYS DELIVERY', value: 10 },
        { label: '11 DAYS DELIVERY', value: 11 },
        { label: '12 DAYS DELIVERY', value: 12 },
        { label: '13 DAYS DELIVERY', value: 13 },
        { label: '14 DAYS DELIVERY', value: 14 },
        { label: '15 DAYS DELIVERY', value: 15 },
        { label: '16 DAYS DELIVERY', value: 16 },
        { label: '17 DAYS DELIVERY', value: 17 },
        { label: '18 DAYS DELIVERY', value: 18 },
        { label: '19 DAYS DELIVERY', value: 19 },
    ]

    function handleChange({ target }) {
        const name = target.name
        const value = target.value
        createGig(name, value)
    }
    const onChange = (value) => {
        console.log('Changed price:', value);
    }
    const { Option } = Select;
    return (
        <section className="pricing">
            <header>
                <h3>Scope & Pricing</h3>
            </header>
            <section className="packages">
                <header>
                    <span>Packages</span>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th className="first"></th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="first">Delivery</td>
                            <td>
                                <Select defaultValue="1"
                                    style={{ width: '100%' }}
                                    placeholder="Select delivery options"
                                    onChange={(value) => createGig('daysToMake', value)}
                                    value={gig.daysToMake}
                                >
                                    {options.map(opt => (
                                        <Option key={opt.value} value={opt.value} label={opt.label}>
                                            {opt.label}
                                        </Option>
                                    ))}

                                </Select>
                            </td>
                            <td>
                                <Select defaultValue="1"
                                    style={{ width: '100%' }}
                                    placeholder="Select delivery options"

                                >
                                    {options.map(opt => (
                                        <Option key={opt.value} value={opt.value} label={opt.label}>
                                            {opt.label}
                                        </Option>
                                    ))}

                                </Select>

                            </td>
                            <td>
                                <Select defaultValue="1"
                                    style={{ width: '100%' }}
                                    placeholder="Select delivery options"

                                >
                                    {options.map(opt => (
                                        <Option key={opt.value} value={opt.value} label={opt.label}>
                                            {opt.label}
                                        </Option>
                                    ))}

                                </Select>
                            </td>
                        </tr>
                        <tr>
                            <td className="first">
                                Price
                            </td>
                            <td>
                                <InputNumber
                                    name='price'
                                    value={gig.price}
                                    min={0}
                                    defaultValue={0}
                                    style={{ width: '100%', height: '100%', fontSize: '16px' }}
                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value =>
                                        value === null || value === void 0 ? void 0 : value.replace(/\$\s?|(,*)/g, '')
                                    }
                                    onChange={(value) => createGig('price', value)}
                                />
                            </td>
                            <td>
                                <InputNumber
                                    min={0}
                                    defaultValue={0}
                                    style={{ width: '100%', height: '100%', fontSize: '16px' }}
                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value =>
                                        value === null || value === void 0 ? void 0 : value.replace(/\$\s?|(,*)/g, '')
                                    }
                                    onChange={onChange}
                                />
                            </td>
                            <td>
                                <InputNumber
                                    min={0}
                                    defaultValue={0}
                                    style={{ width: '100%', height: '100%', fontSize: '16px' }}
                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value =>
                                        value === null || value === void 0 ? void 0 : value.replace(/\$\s?|(,*)/g, '')
                                    }
                                    onChange={onChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

            </section>

        </section>
    )
}