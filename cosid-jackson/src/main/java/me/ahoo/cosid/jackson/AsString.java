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

package me.ahoo.cosid.jackson;

import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import me.ahoo.cosid.CosId;
import me.ahoo.cosid.converter.Radix62IdConverter;

import java.lang.annotation.*;

/**
 * @author ahoo wang
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Inherited
@JacksonAnnotationsInside
@JsonSerialize(using = AsStringSerializer.class)
@JsonDeserialize(using = AsStringDeserializer.class)
public @interface AsString {

    Type value() default Type.TO_STRING;

    boolean radixPadStart() default false;

    int radixCharSize() default Radix62IdConverter.MAX_CHAR_SIZE;

    long friendlyIdEpoch() default CosId.COSID_EPOCH;

    enum Type {
        TO_STRING,
        RADIX,
        FRIENDLY_ID
    }
}