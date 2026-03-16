import React from 'react';
import { useTranslation } from 'next-i18next';
import { GuideScreensEnum } from 'widgets/11-guide-screens/lib/types';
import css from './content.module.scss';

export const Content: React.FC = () => {
    const { t } = useTranslation('guide-ai-agent');

    return (
        <section
            className={css.content}
            id={GuideScreensEnum.CONTENT}
        >
            <div className="container">
                <div className={css.wrapper}>
                    {/* TL;DR */}
                    <div className={css.tldr}>
                        <h2 className={css.tldrTitle}>{t('tldr.title')}</h2>
                        <ul className={css.tldrList}>
                            <li>{t('tldr.items.0')}</li>
                            <li>{t('tldr.items.1')}</li>
                            <li>{t('tldr.items.2')}</li>
                            <li>{t('tldr.items.3')}</li>
                        </ul>
                    </div>

                    {/* Why Taiko for AI Agents */}
                    <div className={css.section}>
                        <h2 className={css.sectionTitle}>{t('why.title')}</h2>

                        {/* Cost */}
                        <h3 className={css.heading}>{t('why.cost.title')}</h3>
                        <p className={css.text}>{t('why.cost.description')}</p>

                        <div className={css.tableWrapper}>
                            <table className={css.table}>
                                <thead>
                                    <tr>
                                        <th>{t('why.cost.table.headers.0')}</th>
                                        <th>{t('why.cost.table.headers.1')}</th>
                                        <th>{t('why.cost.table.headers.2')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t('why.cost.table.rows.0.0')}</td>
                                        <td>{t('why.cost.table.rows.0.1')}</td>
                                        <td className={css.highlight}>{t('why.cost.table.rows.0.2')}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('why.cost.table.rows.1.0')}</td>
                                        <td>{t('why.cost.table.rows.1.1')}</td>
                                        <td className={css.highlight}>{t('why.cost.table.rows.1.2')}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('why.cost.table.rows.2.0')}</td>
                                        <td>{t('why.cost.table.rows.2.1')}</td>
                                        <td className={css.highlight}>{t('why.cost.table.rows.2.2')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className={css.text}>{t('why.cost.conclusion')}</p>

                        {/* Decentralized Sequencing */}
                        <h3 className={css.heading}>{t('why.sequencing.title')}</h3>
                        <p className={css.text}>{t('why.sequencing.description')}</p>
                        <p className={css.text}>{t('why.sequencing.operator')}</p>
                        <ul className={css.list}>
                            <li>{t('why.sequencing.points.0')}</li>
                            <li>{t('why.sequencing.points.1')}</li>
                            <li>{t('why.sequencing.points.2')}</li>
                        </ul>
                        <p className={css.text}>{t('why.sequencing.conclusion')}</p>

                        {/* EVM Equivalence */}
                        <h3 className={css.heading}>{t('why.evm.title')}</h3>
                        <p className={css.text}>{t('why.evm.description')}</p>
                        <ul className={css.list}>
                            <li>{t('why.evm.points.0')}</li>
                            <li>{t('why.evm.points.1')}</li>
                            <li>{t('why.evm.points.2')}</li>
                        </ul>
                    </div>

                    {/* ERC-8004 */}
                    <div className={css.section}>
                        <h2 className={css.sectionTitle}>{t('erc8004.title')}</h2>
                        <p className={css.text}>{t('erc8004.description')}</p>

                        <h3 className={css.heading}>{t('erc8004.provides.title')}</h3>
                        <p className={css.text}>{t('erc8004.provides.intro')}</p>
                        <ul className={css.list}>
                            <li><strong>{t('erc8004.provides.registries.0.name')}</strong> {t('erc8004.provides.registries.0.description')}</li>
                            <li><strong>{t('erc8004.provides.registries.1.name')}</strong> {t('erc8004.provides.registries.1.description')}</li>
                            <li><strong>{t('erc8004.provides.registries.2.name')}</strong> {t('erc8004.provides.registries.2.description')}</li>
                        </ul>

                        <h3 className={css.heading}>{t('erc8004.why_taiko.title')}</h3>
                        <p className={css.text}>{t('erc8004.why_taiko.description')}</p>

                        <h3 className={css.heading}>{t('erc8004.contracts.title')}</h3>
                        <div className={css.contracts}>
                            <div className={css.contract}>
                                <span className={css.contractLabel}>{t('erc8004.contracts.identity.label')}</span>
                                <code className={css.contractAddress}>{t('erc8004.contracts.identity.address')}</code>
                            </div>
                            <div className={css.contract}>
                                <span className={css.contractLabel}>{t('erc8004.contracts.reputation.label')}</span>
                                <code className={css.contractAddress}>{t('erc8004.contracts.reputation.address')}</code>
                            </div>
                        </div>
                    </div>

                    {/* Getting Started */}
                    <div className={css.section}>
                        <h2 className={css.sectionTitle}>{t('getting_started.title')}</h2>

                        <div className={css.step}>
                            <h3 className={css.stepTitle}>{t('getting_started.steps.0.title')}</h3>
                            <p className={css.text}>{t('getting_started.steps.0.description')}</p>
                            <ul className={css.list}>
                                <li>{t('getting_started.steps.0.tools.0')}</li>
                                <li>{t('getting_started.steps.0.tools.1')}</li>
                                <li>
                                    {t('getting_started.steps.0.tools.2')}{' '}
                                    <code className={css.inlineCode}>{t('getting_started.steps.0.rpc')}</code>
                                </li>
                                <li>
                                    {t('getting_started.steps.0.tools.3')}{' '}
                                    <code className={css.inlineCode}>{t('getting_started.steps.0.chain_id')}</code>
                                </li>
                            </ul>
                        </div>

                        <div className={css.step}>
                            <h3 className={css.stepTitle}>{t('getting_started.steps.1.title')}</h3>
                            <p className={css.text}>{t('getting_started.steps.1.description')}</p>
                        </div>

                        <div className={css.step}>
                            <h3 className={css.stepTitle}>{t('getting_started.steps.2.title')}</h3>
                            <p className={css.text}>{t('getting_started.steps.2.description')}</p>
                        </div>

                        <div className={css.step}>
                            <h3 className={css.stepTitle}>{t('getting_started.steps.3.title')}</h3>
                            <p className={css.text}>{t('getting_started.steps.3.description')}</p>
                        </div>
                    </div>

                    {/* Developer Resources */}
                    <div className={css.section}>
                        <h2 className={css.sectionTitle}>{t('resources.title')}</h2>
                        <div className={css.resourceGrid}>
                            <a href="https://docs.taiko.xyz/" target="_blank" rel="noopener noreferrer" className={css.resourceCard}>
                                <span className={css.resourceName}>{t('resources.links.0.name')}</span>
                                <span className={css.resourceUrl}>{t('resources.links.0.url')}</span>
                            </a>
                            <a href="https://github.com/taikoxyz" target="_blank" rel="noopener noreferrer" className={css.resourceCard}>
                                <span className={css.resourceName}>{t('resources.links.1.name')}</span>
                                <span className={css.resourceUrl}>{t('resources.links.1.url')}</span>
                            </a>
                            <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener noreferrer" className={css.resourceCard}>
                                <span className={css.resourceName}>{t('resources.links.2.name')}</span>
                                <span className={css.resourceUrl}>{t('resources.links.2.url')}</span>
                            </a>
                            <a href="https://taiko.xyz/grant-program" target="_blank" rel="noopener noreferrer" className={css.resourceCard}>
                                <span className={css.resourceName}>{t('resources.links.3.name')}</span>
                                <span className={css.resourceUrl}>{t('resources.links.3.url')}</span>
                            </a>
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div className={css.section}>
                        <h2 className={css.sectionTitle}>{t('use_cases.title')}</h2>
                        <div className={css.useCaseGrid}>
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div key={i} className={css.useCaseCard}>
                                    <h3 className={css.useCaseTitle}>{t(`use_cases.cases.${i}.title`)}</h3>
                                    <p className={css.useCaseText}>{t(`use_cases.cases.${i}.description`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className={css.section}>
                        <h2 className={css.sectionTitle}>{t('comparison.title')}</h2>
                        <div className={css.tableWrapper}>
                            <table className={css.table}>
                                <thead>
                                    <tr>
                                        <th>{t('comparison.headers.0')}</th>
                                        <th className={css.highlightCol}>{t('comparison.headers.1')}</th>
                                        <th>{t('comparison.headers.2')}</th>
                                        <th>{t('comparison.headers.3')}</th>
                                        <th>{t('comparison.headers.4')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <tr key={i}>
                                            <td>{t(`comparison.rows.${i}.0`)}</td>
                                            <td className={css.highlightCol}>{t(`comparison.rows.${i}.1`)}</td>
                                            <td>{t(`comparison.rows.${i}.2`)}</td>
                                            <td>{t(`comparison.rows.${i}.3`)}</td>
                                            <td>{t(`comparison.rows.${i}.4`)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className={css.text}>{t('comparison.conclusion')}</p>
                    </div>

                    {/* FAQ */}
                    <div className={css.section}>
                        <h2 className={css.sectionTitle}>{t('faq.title')}</h2>
                        <div className={css.faqList}>
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className={css.faqItem}>
                                    <h3 className={css.faqQuestion}>{t(`faq.items.${i}.question`)}</h3>
                                    <p className={css.faqAnswer}>{t(`faq.items.${i}.answer`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer note */}
                    <p className={css.updated}>{t('updated')}</p>
                </div>
            </div>
        </section>
    );
}
