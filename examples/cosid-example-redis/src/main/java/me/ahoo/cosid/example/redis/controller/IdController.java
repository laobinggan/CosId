/*
 * Copyright [2021-present] [ahoo wang <ahoowang@qq.com> (https://github.com/Ahoo-Wang)].
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

package me.ahoo.cosid.example.redis.controller;

import me.ahoo.cosid.IdGenerator;
import me.ahoo.cosid.provider.IdGeneratorProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * IdController.
 *
 * @author ahoo wang
 */
@RestController
@RequestMapping("ids")
public class IdController {
    private final IdGeneratorProvider provider;
    @Qualifier("__share__SegmentId")
    @Autowired
    @Lazy
    private IdGenerator idGenerator;
    
    public IdController(IdGeneratorProvider provider) {
        this.provider = provider;
    }
    
    @GetMapping
    public long generate() {
        return provider
            .getShare()
            .generate();
    }
    
    @GetMapping("/as-string")
    public String generateAsString() {
        return provider
            .getShare()
            .generateAsString();
    }
    
}
