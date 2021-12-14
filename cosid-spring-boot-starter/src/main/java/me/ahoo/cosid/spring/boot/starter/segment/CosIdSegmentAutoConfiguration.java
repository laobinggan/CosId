/*
 * Copyright [2021-2021] [ahoo wang <ahoowang@qq.com> (https://github.com/Ahoo-Wang)].
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package me.ahoo.cosid.spring.boot.starter.segment;

import com.google.common.base.MoreObjects;
import com.google.common.base.Preconditions;
import me.ahoo.cosid.segment.DefaultSegmentId;
import me.ahoo.cosid.segment.IdSegmentDistributor;
import me.ahoo.cosid.segment.SegmentChainId;
import me.ahoo.cosid.segment.SegmentId;
import me.ahoo.cosid.segment.concurrent.PrefetchWorkerExecutorService;
import me.ahoo.cosid.spring.boot.starter.ConditionalOnCosIdEnabled;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author ahoo wang
 */
@Configuration(proxyBeanMethods = false)
@ConditionalOnCosIdEnabled
@ConditionalOnCosIdSegmentEnabled
@EnableConfigurationProperties(SegmentIdProperties.class)
public class CosIdSegmentAutoConfiguration {

    private final SegmentIdProperties segmentIdProperties;

    public CosIdSegmentAutoConfiguration(SegmentIdProperties segmentIdProperties) {
        this.segmentIdProperties = segmentIdProperties;
    }

    @Bean
    @ConditionalOnMissingBean
    public PrefetchWorkerExecutorService prefetchWorkerExecutorService() {
        SegmentIdProperties.Chain.PrefetchWorker prefetchWorker = segmentIdProperties.getChain().getPrefetchWorker();
        Preconditions.checkNotNull(prefetchWorker, "cosid.segment.chain.prefetch-worker can not be null!");
        return new PrefetchWorkerExecutorService(prefetchWorker.getPrefetchPeriod(), prefetchWorker.getCorePoolSize());
    }

    @Bean
    @ConditionalOnMissingBean
    public CosIdLifecyclePrefetchWorkerExecutorService lifecycleSegmentChainId(PrefetchWorkerExecutorService prefetchWorkerExecutorService) {
        return new CosIdLifecyclePrefetchWorkerExecutorService(prefetchWorkerExecutorService);
    }


    public static SegmentId createSegment(SegmentIdProperties segmentIdProperties, SegmentIdProperties.IdDefinition idDefinition, IdSegmentDistributor idSegmentDistributor, PrefetchWorkerExecutorService prefetchWorkerExecutorService) {
        long ttl = MoreObjects.firstNonNull(idDefinition.getTtl(), segmentIdProperties.getTtl());
        SegmentIdProperties.Mode mode = MoreObjects.firstNonNull(idDefinition.getMode(), segmentIdProperties.getMode());
        if (SegmentIdProperties.Mode.DEFAULT.equals(mode)) {
            return new DefaultSegmentId(ttl, idSegmentDistributor);
        }
        SegmentIdProperties.Chain chain = MoreObjects.firstNonNull(idDefinition.getChain(), segmentIdProperties.getChain());
        return new SegmentChainId(ttl, chain.getSafeDistance(), idSegmentDistributor, prefetchWorkerExecutorService);
    }
}